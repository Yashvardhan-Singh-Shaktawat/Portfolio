<?php
// Set response headers to JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS requests for local testing CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Ensure the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed. Only POST requests are accepted."
    ]);
    exit();
}

// Get the raw POST data
$inputData = file_get_contents("php://input");
$data = json_decode($inputData, true);

// Extract and sanitize input parameters
$name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$subject = isset($data['subject']) ? strip_tags(trim($data['subject'])) : 'New Portfolio Contact Form Submission';
$message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

// Validation checks
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please fill in all required fields (Name, Email, Message)."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);
    exit();
}

// Target email address where you want to receive the messages
// Hostinger usually requires the "From" header to be an email address hosted on the same domain.
// We will use a placeholder or use the sender email, but advise setting up a domain email.
$toEmail = "ys537781@gmail.com"; // User's actual email address

// Prepare email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
// Important Hostinger requirement: From header should belong to your domain to prevent spam filters.
// We can use a generic noreply or a domain email, and put the user's email in Reply-To.
$domain = $_SERVER['SERVER_NAME'];
$fromEmail = "noreply@" . $domain;
if (empty($domain) || $domain === 'localhost' || $domain === '127.0.0.1') {
    $fromEmail = "portfolio-contact@yourdomain.com";
}
$headers .= "From: Portfolio Contact <" . $fromEmail . ">" . "\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">" . "\r\n";

// Construct HTML email content
$emailContent = "
<html>
<head>
  <title>New Portfolio Message</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { padding: 20px; border: 1px solid #eee; border-radius: 5px; max-width: 600px; }
    .header { font-size: 18px; font-weight: bold; border-bottom: 2px solid #6366f1; padding-bottom: 10px; margin-bottom: 20px; }
    .field { margin-bottom: 12px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 4px; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #6366f1; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>Portfolio Contact Form Submission</div>
    <div class='field'>
      <div class='label'>Name:</div>
      <div class='value'>" . htmlspecialchars($name) . "</div>
    </div>
    <div class='field'>
      <div class='label'>Email:</div>
      <div class='value'>" . htmlspecialchars($email) . "</div>
    </div>
    <div class='field'>
      <div class='label'>Subject:</div>
      <div class='value'>" . htmlspecialchars($subject) . "</div>
    </div>
    <div class='field'>
      <div class='label'>Message:</div>
      <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
    </div>
  </div>
</body>
</html>
";

// Send email
$mailSent = @mail($toEmail, $subject, $emailContent, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your message has been sent successfully."
    ]);
} else {
    // If mail fails, fall back to success response with notice (useful for local development where mail server is offline)
    // We return success: false but with clear message, or handle local testing.
    // Let's log it locally or provide a success simulation if on localhost.
    if ($_SERVER['SERVER_NAME'] === 'localhost' || $_SERVER['SERVER_NAME'] === '127.0.0.1') {
        http_response_code(200);
        echo json_encode([
            "success" => true,
            "message" => "[Local Simulation] Message received from " . $name . " (" . $email . ")."
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Server error: Unable to send mail. Please try again later."
        ]);
    }
}
?>
