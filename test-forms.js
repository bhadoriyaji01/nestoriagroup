// Test script to verify all forms work with PHP Mailer
console.log("Testing all forms with PHP Mailer...");

// Test data for each form type
const testForms = [
  {
    name: "Contact Form",
    service: "ContactService",
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+919876543210",
      subject: "Test Contact Form",
      message: "This is a test message from the contact form.",
      formType: "contact"
    }
  },
  {
    name: "Land Deal Inquiry Form",
    service: "LandDealService",
    data: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+919876543211",
      propertyType: "residential",
      budget: "50-1cr",
      message: "Interested in residential plots.",
      formType: "land-deal"
    }
  },
  {
    name: "About Dholera Request Form",
    service: "AboutdholeraService",
    data: {
      name: "Robert Johnson",
      email: "robert.j@example.com",
      mobile: "+919876543212",
      propertyType: "1",
      message: "Requesting information about Dholera SIR.",
      formType: "about-dholera"
    }
  },
  {
    name: "Testimonial Form",
    service: "TestimonialService",
    data: {
      name: "Emily Davis",
      email: "emily.d@example.com",
      phone: "+919876543213",
      propertyType: "residential",
      message: "Great experience with Nestoria Group. Highly recommended!",
      formType: "testimonial"
    }
  }
];

// Test each form
testForms.forEach(form => {
  console.log(`\nTesting ${form.name}...`);
  
  // In a real implementation, we would import the service and call its method
  // For this test, we'll simulate the fetch call that each service makes
  
  fetch('/send-email.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.data),
  })
  .then(response => {
    if (response.ok) {
      console.log(`✅ ${form.name} test passed`);
      return response.json();
    } else {
      console.log(`❌ ${form.name} test failed with status ${response.status}`);
      return response.text();
    }
  })
  .then(data => {
    if (typeof data === 'object' && data.success) {
      console.log(`   Server response: ${data.message}`);
    } else if (typeof data === 'object') {
      console.log(`   Server error: ${data.message}`);
    }
  })
  .catch(error => {
    console.log(`❌ ${form.name} test failed with error: ${error.message}`);
  });
});

// Test newsletter subscription
console.log("\nTesting Newsletter Subscription...");
const newsletterData = {
  name: "Newsletter Subscriber",
  email: "subscriber@example.com",
  phone: "",
  subject: "Newsletter Subscription",
  message: "Please subscribe subscriber@example.com to the newsletter.",
  formType: "contact"
};

fetch('/send-email.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newsletterData),
})
.then(response => {
  if (response.ok) {
    console.log("✅ Newsletter Subscription test passed");
    return response.json();
  } else {
    console.log(`❌ Newsletter Subscription test failed with status ${response.status}`);
    return response.text();
  }
})
.then(data => {
  if (typeof data === 'object' && data.success) {
    console.log(`   Server response: ${data.message}`);
  } else if (typeof data === 'object') {
    console.log(`   Server error: ${data.message}`);
  }
})
.catch(error => {
  console.log(`❌ Newsletter Subscription test failed with error: ${error.message}`);
});

console.log("\nForm testing completed. Check server logs for detailed results.");