// Function to send an email notification via script
function sendEmailNotification() {
    // Initialize a new GlideEmailOutbound object
    var email = new GlideEmailOutbound();
    
    // Set the email template to use (sys_id of the template)
    email.setSubject("Notification Subject Here");
    email.setBody("Body of the email message here.");
    
    // Add recipients (this example sends to the current user)
    email.setTo(gs.getUser().getEmail()); // Send to current logged-in user
    
    // Optionally add CC or BCC recipients
    email.addCc('example@company.com');
    
    // Send the email
    email.send();
    
    gs.info("Email sent to " + gs.getUser().getEmail());
}

// Call the function from within a Business Rule, Workflow Script, or UI Action
sendEmailNotification();
