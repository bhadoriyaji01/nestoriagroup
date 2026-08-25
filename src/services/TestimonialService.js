/**
 * Service for handling testimonial form submissions
 */

import MailService from './MailService';

export const TestimonialService = {
  /**
   * Send testimonial form data to the server
   * @param {Object} formData - The form data to send
   * @returns {Promise} - The response from the server
   */
  sendTestimonial: async (formData) => {
    try {
      const emailData = {
        ...formData,
        formType: 'testimonial'
      };
      
      const data = await MailService.sendEmail(emailData);
      return data;
    } catch (error) {
      console.error('Error sending testimonial:', error);
      throw error;
    }
  },
};