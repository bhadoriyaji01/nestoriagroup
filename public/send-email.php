<?php
// Allow CORS for same-origin and JSON responses
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  echo json_encode(['success' => true]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Method not allowed']);
  exit;
}

// Read JSON body or form-encoded fallback
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if ($data === null) {
  $data = $_POST; // Fallback for form-encoded
}

function get_value($arr, $key, $default = '') {
  return isset($arr[$key]) ? trim((string)$arr[$key]) : $default;
}

$name = get_value($data, 'name');
$email = get_value($data, 'email');
$phone = get_value($data, 'phone', get_value($data, 'mobile'));
$subjectInput = get_value($data, 'subject');
$messageInput = get_value($data, 'message', get_value($data, 'testimonial'));
$propertyType = get_value($data, 'propertyType');
$budget = get_value($data, 'budget');
$formType = strtolower(get_value($data, 'formType'));

// Infer form type if not provided
if ($formType === '') {
  if ($budget !== '' || $propertyType !== '') {
    $formType = 'land-deal';
  } elseif (get_value($data, 'testimonial') !== '') {
    $formType = 'testimonial';
  } elseif ($subjectInput !== '') {
    $formType = 'contact';
  } else {
    $formType = 'contact';
  }
}

// Configure recipient
$to = getenv('TO_EMAIL') ?: 'info@nestoriagroup.com';
$bcc = getenv('BCC_EMAIL');

// Subject by form type
switch ($formType) {
  case 'land-deal':
    $subject = 'New Land Deal Inquiry - Nestoria Group';
    break;
  case 'about-dholera':
    $subject = 'New Dholera Information Request - Nestoria Group';
    break;
  case 'testimonial':
    $subject = 'New Testimonial Submission - Nestoria Group';
    break;
  default:
    $subject = 'New Contact Form Submission - Nestoria Group';
}
if ($subjectInput !== '') {
  $subject .= ' - ' . $subjectInput;
}

// Basic validation
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Valid email is required']);
  exit;
}

// Build HTML message
$time = new DateTime('now', new DateTimeZone('Asia/Kolkata'));
$submittedAt = $time->format('Y-m-d H:i:s');

$html = '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">'
  . '<h2 style="color:#2563eb;border-bottom:2px solid #2563eb;padding-bottom:10px;">New ' . htmlspecialchars(ucwords(str_replace('-', ' ', $formType))) . ' Form Submission</h2>'
  . '<div style="background-color:#f8fafc;padding:20px;border-radius:8px;margin:20px 0;">'
  . '<h3 style="color:#1e40af;margin-top:0;">Contact Information</h3>'
  . '<p><strong>Name:</strong> ' . htmlspecialchars($name !== '' ? $name : 'Not provided') . '</p>'
  . '<p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>'
  . '<p><strong>Phone:</strong> ' . htmlspecialchars($phone !== '' ? $phone : 'Not provided') . '</p>';

if ($formType === 'contact' && $subjectInput !== '') {
  $html .= '<p><strong>Subject:</strong> ' . htmlspecialchars($subjectInput) . '</p>';
}
if ($formType === 'land-deal') {
  $html .= '<p><strong>Property Type:</strong> ' . htmlspecialchars($propertyType !== '' ? $propertyType : 'Not provided') . '</p>';
  $html .= '<p><strong>Budget Range:</strong> ' . htmlspecialchars($budget !== '' ? $budget : 'Not provided') . '</p>';
}
if ($formType === 'about-dholera') {
  $html .= '<p><strong>Property Type:</strong> ' . htmlspecialchars($propertyType !== '' ? $propertyType : 'Not provided') . '</p>';
}
if ($formType === 'testimonial') {
  $html .= '<p><strong>Property Type:</strong> ' . htmlspecialchars($propertyType !== '' ? $propertyType : 'Not provided') . '</p>';
}

$html .= '<h3 style="color:#1e40af;">Message</h3>'
  . '<p style="background-color:white;padding:15px;border-radius:4px;border-left:4px solid #2563eb;">' . nl2br(htmlspecialchars($messageInput !== '' ? $messageInput : 'Not provided')) . '</p>'
  . '</div>'
  . '<div style="margin-top:20px;padding:15px;background-color:#eff6ff;border-radius:8px;">'
  . '<p style="margin:0;color:#1e40af;font-size:14px;"><strong>Submitted on:</strong> ' . htmlspecialchars($submittedAt) . ' IST</p>'
  . '<p style="margin:5px 0 0 0;color:#1e40af;font-size:14px;"><strong>Source:</strong> Nestoria Group Website</p>'
  . '</div>'
  . '</div>';

// Prepare headers for HTML email
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= 'From: Nestoria Group Website <' . (getenv('EMAIL_USER') ?: 'no-reply@' . $_SERVER['HTTP_HOST']) . ">\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";

if (!empty($bcc)) {
  $headers .= 'BCC: ' . $bcc . "\r\n";
}

// Send email
$sent = @mail($to, $subject, $html, $headers);

if ($sent) {
  echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
  // Try alternative method with additional headers
  $headers_alt = "MIME-Version: 1.0\r\n";
  $headers_alt .= "Content-type:text/html;charset=UTF-8\r\n";
  $headers_alt .= 'From: ' . (getenv('EMAIL_USER') ?: 'no-reply@' . $_SERVER['HTTP_HOST']) . "\r\n";
  $headers_alt .= 'Reply-To: ' . $email . "\r\n";
  
  if (!empty($bcc)) {
    $headers_alt .= 'BCC: ' . $bcc . "\r\n";
  }
  
  $sent_alt = @mail($to, $subject, $html, $headers_alt);
  
  if ($sent_alt) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
  } else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
  }
}

?>


