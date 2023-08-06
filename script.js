// script.js

function sendInquiry() {
  // Get form data
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const contactNumber = document.getElementById("contactNumber").value;
  // Get other form data in a similar manner (e.g., service type, etc.)
  const message = document.getElementById("message").value;
  const service = document.getElementById("service").value;
  // Build the message to be sent in the chat window
  const email1 = document.getElementById("email1").value;
  const inquiryMessage = `Inquiry from ${firstName} ${lastName}\nEmail: ${email}\nContact Number: ${contactNumber}\nMessage: ${message}`;

  // Create the Facebook Messenger link with the pre-filled message
  const fbPageUsername = "https://m.me/callmEsmayl"; // Replace with your Facebook Page username or Page ID
  const messengerLink = `https://www.facebook.com/callmEsmayl?mibextid=ZbWKwL${fbPageUsername}?ref=${encodeURIComponent(
    inquiryMessage
  )}`;
  if (!firstName || !lastName || !email || !contactNumber || !message) {
    alert("Please fill in all required fields before sending the inquiry.");
    // Highlight the empty textboxes

    return;
  }

  // Redirect the user to the Facebook Messenger link
  window.location.href = messengerLink;
}

function resetForm() {
  // Reset the form elements to their initial state
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contactNumber").value = "";
  // Reset other form elements in a similar manner (e.g., service type, etc.)
  document.getElementById("service").value = "";
  document.getElementById("message").value = "";
  document.getElementById("email1").value = "";
}
