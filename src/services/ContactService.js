/**
 * Service for handling contact form submissions
 */

import MailService from './MailService';

export const ContactService = {
  /**
   * Send contact form data to the server
   * @param {Object} formData - The contact form data
   * @param {string} formData.name - The name of the sender
   * @param {string} formData.email - The email of the sender
   * @param {string} formData.phone - The phone number of the sender
   * @param {string} formData.subject - The subject of the message
   * @param {string} formData.message - The message content
   * @returns {Promise<Object>} - The response from the server
   */
  sendContactForm: async (formData) => {
    try {
      const emailData = {
        ...formData,
        formType: 'contact'
      };
      
      const data = await MailService.sendEmail(emailData);
      return data;
    } catch (error) {
      console.error('Error sending contact form:', error);
      throw error;
    }
  },
};

export default ContactService;