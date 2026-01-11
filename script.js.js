/* ================================
   Sunny Computer CSC Centre
   JavaScript File (script.js)
   ================================ */

// DOM Ready Function
document.addEventListener('DOMContentLoaded', function() {
  // Initialize chat with welcome message
  initializeChat();
  
  // Add Enter key support for chat
  const userInput = document.getElementById('userInput');
  if (userInput) {
    userInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
  
  // Initialize form submission
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      submitEnquiryForm();
    });
  }
  
  // Add sample messages to chat after a delay
  setTimeout(addSampleQuestions, 2000);
});

/* ===== AI Chat Function ===== */
function sendMessage() {
  const input = document.getElementById('userInput');
  const chatBox = document.getElementById('chatBox');

  if (!input || !chatBox || input.value.trim() === '') {
    // Add shake animation to input
    input.style.animation = 'shake 0.5s';
    setTimeout(() => {
      input.style.animation = '';
    }, 500);
    return;
  }

  // User message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user-message';
  userMsg.innerHTML = '<strong>You:</strong> ' + input.value;
  chatBox.appendChild(userMsg);

  // Clear input
  const userQuestion = input.value;
  input.value = '';

  // Show typing indicator
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-message ai-message typing';
  typingIndicator.innerHTML = '<strong>AI:</strong> <span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
  chatBox.appendChild(typingIndicator);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate AI thinking delay
  setTimeout(() => {
    // Remove typing indicator
    typingIndicator.remove();
    
    // AI reply
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-message ai-message';
    aiMsg.innerHTML = '<strong>AI Assistant:</strong> ' + getAIReply(userQuestion);
    chatBox.appendChild(aiMsg);
    
    // Auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000 + Math.random() * 500);
}

/* ===== AI Auto Reply Logic ===== */
function getAIReply(message) {
  message = message.toLowerCase().trim();
  
  // Greetings
  if (/(hello|hi|hey|good morning|good afternoon|good evening)/i.test(message)) {
    return 'Hello! Welcome to Sunny Computer CSC Centre. How can I help you today?';
  }
  
  // Thanks
  if (/(thanks|thank you|thankyou|thank)/i.test(message)) {
    return 'You\'re welcome! Is there anything else I can help you with?';
  }
  
  // Bye
  if (/(bye|goodbye|see you|cya)/i.test(message)) {
    return 'Thank you for visiting! Feel free to ask if you have more questions. Have a great day!';
  }
  
  // PAN Card
  if (message.includes('pan')) {
    return 'We provide PAN Card services including new application, corrections, and reprints. You need: 1) Aadhaar Card, 2) Passport-size photo, 3) Address proof. Service charge: ₹150. Processing time: 7-15 working days.';
  }
  
  // Aadhaar
  if (message.includes('aadhaar') || message.includes('aadhar')) {
    return 'We offer Aadhaar enrollment, update (name, address, DOB, mobile), and biometric update services. Required documents: Proof of identity, proof of address, proof of date of birth. Update charge: ₹100. Please bring original documents.';
  }
  
  // Certificates
  if (message.includes('certificate')) {
    if (message.includes('birth')) {
      return 'Birth Certificate: Required documents - Hospital discharge slip, parent\'s Aadhaar, affidavit if delayed. Charge: ₹100-150. Processing time: 3-7 days.';
    }
    if (message.includes('caste')) {
      return 'Caste Certificate: Required - Ration card, Aadhaar, existing caste proof if any. Charge: ₹150. Processing time: 7-14 days.';
    }
    if (message.includes('income')) {
      return 'Income Certificate: Required - Aadhaar, property details, affidavit of income. Charge: ₹200. Processing time: 5-10 days.';
    }
    return 'We provide various certificates: Birth (₹100-150), Caste (₹150), Income (₹200), Domicile (₹150), and others. Please specify which certificate you need.';
  }
  
  // Charges/Fees
  if (message.includes('charge') || message.includes('fee') || message.includes('price') || message.includes('cost')) {
    return 'Our service charges: PAN Card ₹150, Aadhaar Update ₹100, Birth Certificate ₹100-150, Caste Certificate ₹150, Income Certificate ₹200, Passport Assistance ₹300-500. All charges are inclusive of government fees.';
  }
  
  // Timing
  if (message.includes('time') || message.includes('hour') || message.includes('open') || message.includes('close')) {
    return 'Our centre timings: Monday to Saturday: 9:00 AM - 8:00 PM. Sunday: Closed (except for emergency services). You can also contact us on WhatsApp anytime.';
  }
  
  // Location
  if (message.includes('where') || message.includes('location') || message.includes('address')) {
    return 'We are located at Main Road, Your Village/Town Name. You can find us on Google Maps using the map on our website, or contact us at +91 9435091694 for directions.';
  }
  
  // Documents required
  if (message.includes('document') || message.includes('require') || message.includes('need')) {
    return 'Generally required documents: Aadhaar Card, Passport-size photos, Address proof, Existing certificates (if any). Specific requirements vary by service. Please specify which service you need.';
  }
  
  // Contact
  if (message.includes('contact') || message.includes('phone') || message.includes('call') || message.includes('number')) {
    return 'You can contact us at: Phone: +91 9435091694, WhatsApp: +91 9435091694, Email: info@sunnycomputercsc.com. We are available Monday-Saturday, 9AM-8PM.';
  }
  
  // Government schemes
  if (message.includes('scheme') || message.includes('government') || message.includes('yojana') || message.includes('pm')) {
    return 'We assist with various government schemes: PM Kisan, Ujjwala Yojana, PM Awas Yojana, Ayushman Bharat, Pension schemes, and more. Please visit our centre for detailed information and application assistance.';
  }
  
  // CSC services
  if (message.includes('csc') || message.includes('service') || message.includes('provide')) {
    return 'We provide: 1) Aadhaar services, 2) PAN Card, 3) Certificates, 4) Government scheme assistance, 5) Banking services, 6) Insurance, 7) Bill payments, 8) Passport assistance, 9) Digital literacy, and many more services.';
  }
  
  // Banking
  if (message.includes('bank') || message.includes('account') || message.includes('loan')) {
    return 'We offer banking services: Account opening, deposits, withdrawals, money transfer, loan applications, and insurance services through CSP banking.';
  }
  
  // Passport
  if (message.includes('passport')) {
    return 'Passport application assistance: We help with form filling, document verification, and appointment booking. Required: Aadhaar, PAN, Address proof, Birth certificate. Service charge: ₹300-500.';
  }
  
  // Default reply for unknown queries
  const defaultReplies = [
    'I understand you\'re asking about "' + message + '". For specific information about this service, please visit our centre or contact us directly at +91 9435091694.',
    'Thank you for your query. For detailed assistance with "' + message + '", please visit our centre where our staff can help you personally.',
    'I can help you with Aadhaar, PAN, certificates, government schemes, and other CSC services. Could you please be more specific about what you need?'
  ];
  
  return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

/* ===== Initialize Chat ===== */
function initializeChat() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    // Clear existing content
    chatBox.innerHTML = '';
    
    // Add initial AI message
    const welcomeMsg = document.createElement('div');
    welcomeMsg.className = 'chat-message ai-message';
    welcomeMsg.innerHTML = '<strong>AI Assistant:</strong> Welcome to Sunny Computer CSC Centre! I can help you with information about Aadhaar, PAN card, certificates, government schemes, service charges, and more. How can I assist you today?';
    chatBox.appendChild(welcomeMsg);
  }
}

/* ===== Add Sample Questions ===== */
function addSampleQuestions() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    const sampleMsg = document.createElement('div');
    sampleMsg.className = 'chat-message ai-message';
    sampleMsg.innerHTML = '<strong>AI Assistant:</strong> Try asking: "What documents are needed for PAN card?" or "What are your timings?" or "How much for Aadhaar update?"';
    chatBox.appendChild(sampleMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

/* ===== Enquiry Form Submission ===== */
function submitEnquiryForm() {
  const form = document.getElementById('enquiryForm');
  if (!form) return;
  
  const name = form.querySelector('input[placeholder*="Name"]')?.value.trim();
  const mobile = form.querySelector('input[placeholder*="Mobile"]')?.value.trim();
  const email = form.querySelector('input[type="email"]')?.value.trim();
  const service = form.querySelector('textarea')?.value.trim();
  
  // Basic validation
  if (!name || !mobile || !service) {
    alert('Please fill in all required fields (Name, Mobile, and Service Required).');
    return false;
  }
  
  // Mobile number validation
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number.');
    return false;
  }
  
  // Email validation (optional)
  if (email && !validateEmail(email)) {
    alert('Please enter a valid email address or leave it blank.');
    return false;
  }
  
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
  submitBtn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    // In a real application, you would send data to a server here
    // For demo purposes, we'll just show a success message
    
    // Reset form
    form.reset();
    
    // Restore button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    
    // Show success message
    alert('Thank you, ' + name + '! Your enquiry has been submitted successfully. We will contact you at ' + mobile + ' within 24 hours.');
    
    // Optional: Log to console (for debugging)
    console.log('Enquiry submitted:', { name, mobile, email, service });
    
  }, 1500);
  
  return false;
}

/* ===== Email Validation Helper ===== */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/* ===== WhatsApp Chat Function ===== */
function openWhatsApp(service = '') {
  const phone = '919435091694';
  const message = service ? 
    `Hello Sunny Computer CSC, I need information about: ${service}` :
    'Hello Sunny Computer CSC, I need information about your services.';
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* ===== Service Quick Links ===== */
function quickService(service) {
  const input = document.getElementById('userInput');
  if (input) {
    input.value = service;
    sendMessage();
  }
}

/* ===== Add CSS for animations ===== */
function addChatStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .typing-dots {
      display: inline-block;
    }
    
    .typing-dots span {
      display: inline-block;
      animation: typingDot 1.4s infinite both;
    }
    
    .typing-dots span:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .typing-dots span:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    @keyframes typingDot {
      0%, 80%, 100% { opacity: 0; }
      40% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

// Add chat styles when script loads
addChatStyles();

/* ===== Utility: Format Date ===== */
function getCurrentDate() {
  const now = new Date();
  return now.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/* ===== Service Status Check ===== */
function checkServiceStatus(service) {
  const services = {
    'aadhaar': 'Available - Walk-in service',
    'pan': 'Available - Processing time: 7-15 days',
    'certificate': 'Available - Depends on certificate type',
    'banking': 'Available - Monday to Saturday',
    'passport': 'Available - By appointment'
  };
  
  return services[service.toLowerCase()] || 'Please contact us for availability';
}