<?php

$firstname = filter_var($_POST['first-name'], FILTER_SANITIZE_STRING);
$lastname = filter_var($_POST['last-name'], FILTER_SANITIZE_STRING);
$companyname = filter_var($_POST['company-name'], FILTER_SANITIZE_STRING);
$tel = filter_var($_POST['number'], FILTER_SANITIZE_STRING);
$alttel = filter_var($_POST['alt-number'], FILTER_SANITIZE_STRING);
$email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$radio = filter_var($_POST['radio'], FILTER_SANITIZE_STRING);
$type = filter_var($_POST['type'], FILTER_SANITIZE_STRING);
$timecall = filter_var($_POST['time-call'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$headers = "From: Get a quote <{$email}>" . PHP_EOL .
    "Reply-To: <{$myEmail}>" . PHP_EOL .
    'X-Mailer: PHP/' . phpversion();
$headers .= 'Content-type: text/plain; charset=UTF-8; format=flowed' . "\r\n";
$headers .= 'Content-Transfer-Encoding: 8bit'."\r\n";
$myEmail = 'romenetsnadia@gmail.com';

mail($myEmail, $firstname, $lastname, $companyname, $tel, $alttel, $radio, $type, $timecall, $message, $headers);

echo '<div class="alert alert-success">We have received your message, thank you!</div>';
?>
