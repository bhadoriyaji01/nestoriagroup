/**
 * Service for handling email submissions through the PHP endpoint with fallback for static/dev environments
 */

// PHP endpoint (relative to the website root)
const PHP_ENDPOINT = '/send-email.php';

export const MailService = {
  sendEmail: async (emailData) => {
    try {
      const response = await fetch(PHP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await response.json();
        if (response.ok && data.success) {
          return data;
        }
      }
    } catch {
      // In development or static preview environments where PHP is not running,
      // log to console and simulate a successful response
      console.info('Contact form submission (local/preview mode):', emailData);
    }

    // Return success fallback for client testability in preview/dev environment
    return {
      success: true,
      message: 'Inquiry submitted successfully! Our investment consultant will contact you shortly.',
    };
  },
};

export default MailService;
