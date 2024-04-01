<?php

// Function to validate email address
function validateEmail($email) {
  return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Get email from form submission
$email = $_POST['email'];

// Validate email
$isValid = validateEmail($email);

// Prepare log data
$dateTime = date("Y/m/d, H:i:s");
$result = $isValid ? "true" : "false";

// Create log string
$logLine = "$dateTime, $email, $result\n";

// Open log file in append mode (a)
$logFile = fopen("log.csv", "a");

// Write log data to file
if ($logFile) {
  fwrite($logFile, $logLine);
  fclose($logFile);
  
  // Display success message
  echo "Email validation result logged. Your email is " . ($isValid ? "valid" : "invalid");
} else {
  echo "Error creating log file.";
}

?>
