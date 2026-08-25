/**
 * Service for handling land deal inquiry form submissions
 */

import MailService from './MailService';

export const LandDealService = {
  /**
   * Send land deal inquiry form data to the server
   * @param {Object} formData - The land deal inquiry form data
   * @param {string} formData.name - The name of the sender
   * @param {string} formData.email - The email of the sender
   * @param {string} formData.phone - The phone number of the sender
   * @param {string} formData.propertyType - The type of property interested in
   * @param {string} formData.budget - The budget range
   * @param {string} formData.message - The specific requirements
   * @returns {Promise<Object>} - The response from the server
   */
  sendLandDealInquiry: async (formData) => {
    try {
      const emailData = {
        ...formData,
        formType: 'land-deal'
      };
      
      const data = await MailService.sendEmail(emailData);
      return data;
    } catch (error) {
      console.error('Error sending land deal inquiry:', error);
      throw error;
    }
  },
};

export default LandDealService;