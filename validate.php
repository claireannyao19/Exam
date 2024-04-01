<?php
$email = isset($_POST['email']) ? trim($_POST['email']) : '';

$isValid = filter_var($email, FILTER_VALIDATE_EMAIL);

$response = array(
  "error" => !$isValid,
  "message" => $isValid ? "Email validated" : "Email is not valid"
);

// Log validation attempt
$logData = array(
  date("Y/m/d"),
  date("H:i:s"),
  $email,
  $isValid ? "true" : "false"
);

$log = fopen("log.csv", "a"); // Open log file in append mode
fputcsv($log, $logData); // Write log data to CSV file
fclose($log);

echo json_encode($response);
?>
