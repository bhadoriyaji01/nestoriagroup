/**
 * Service for handling email submissions through the PHP endpoint
 */

// PHP endpoint (relative to the website root)
const PHP_ENDPOINT = '/send-email.php';

export const MailService = {
  sendEmail: async (emailData) => {
    const response = await fetch(PHP_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'PHP email service failed');
    }

    return data;
  },
};

export default MailService;
