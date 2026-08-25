/**
 * Service for handling Aboutdholera form submissions
 */

import MailService from './MailService';

export const AboutdholeraService = {
  /**
   * Send Aboutdholera form data to the server
   * @param {Object} formData - The form data to send
   * @returns {Promise} - The response from the server
   */
  sendAboutdholeraRequest: async (formData) => {
    try {
      const emailData = {
        ...formData,
        formType: 'about-dholera'
      };
      
      const data = await MailService.sendEmail(emailData);
      return data;
    } catch (error) {
      console.error('Error sending Aboutdholera request:', error);
      throw error;
    }
  },
};