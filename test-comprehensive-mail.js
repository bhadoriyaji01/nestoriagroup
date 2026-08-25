// Comprehensive test script for MailService with fallback
import MailService from './src/services/MailService.js';

async function testMailService() {
  console.log('Testing MailService with comprehensive test...\n');
  
  // Test data matching the format used by existing services
  const testCases = [
    {
      name: 'Contact Form Test',
      data: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        subject: 'Test Contact Form',
        message: 'This is a test message from the contact form.',
        formType: 'contact'
      }
    },
    {
      name: 'Land Deal Inquiry Test',
      data: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        propertyType: 'residential',
        budget: '50-1cr',
        message: 'Interested in residential plots.',
        formType: 'land-deal'
      }
    },
    {
      name: 'Testimonial Form Test',
      data: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        propertyType: 'residential',
        message: 'Great experience with Nestoria Group. Highly recommended!',
        formType: 'testimonial'
      }
    }
  ];

  for (const testCase of testCases) {
    console.log(`\n--- ${testCase.name} ---`);
    try {
      console.log('Sending test data:', JSON.stringify(testCase.data, null, 2));
      
      const response = await MailService.sendEmail(testCase.data);
      console.log('✅ Success! Response:', response);
    } catch (error) {
      console.error('❌ Test failed with error:', error.message);
    }
  }
  
  console.log('\n--- Test completed ---');
}

testMailService();