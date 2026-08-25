// Test script for MailService
import MailService from './src/services/MailService.js';

async function testMailService() {
  try {
    console.log('Testing MailService with API endpoint...');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from the MailService',
      formType: 'test'
    };
    
    console.log('Sending test data:', testData);
    
    const response = await MailService.sendEmail(testData);
    console.log('Success! Response:', response);
  } catch (error) {
    console.error('Test failed with error:', error.message);
  }
}

testMailService();