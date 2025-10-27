<?php

/**
 * Include external classes
 */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
require 'mailConfig.php';


/**
 * Check request method
 */
switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        // Payload is not send to $_POST Variable,
        // is send to php:input as a text
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $name = htmlspecialchars($params->name);
        $email = htmlspecialchars($params->email);
        $messageBody = nl2br(htmlspecialchars($params->message));

        $subject = "New form request from $name";
        $message = "You got a new form request on francois-gonin.dev from:<br><br>" .
                   "<b>Name: </b>$name<br>" .
                   "<b>Email: </b>$email<br>" .
                   "<b>Message: </b><br>$messageBody";
        
        sendEmail($subject, $message);
        break;

    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
} 


/**
 * Send Email with PHPMailer
 */
function sendEmail($subject, $message) {

    /**
     * Create new Instance of PHPMailer
     * @param {bool} - true = use exception
     */
    $mail = new PHPMailer(true);
    // echo get_class($mail);


    /**
     * Configure PHPMailer and send email
     */
    try {
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->CharSet = 'UTF-8';
        $mail->Host = MailConfig::SMTP_HOST;
        $mail->SMTPAuth = MailConfig::SMTP_AUTH;
        $mail->Port = MailConfig::SMTP_PORT;
        if( $mail->Port == 587 ) {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        } else {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        }
        $mail->Username = MailConfig::SMTP_USER;
        $mail->Password = MailConfig::SMTP_PASSWORD;

        $mail->isHTML(true);
        $mail->setFrom(MailConfig::EMAIL_FROM_ADDR, MailConfig::EMAIL_FROM_NAME);
        $mail->addAddress(MailConfig::EMAIL_TO_ADDR);
        $mail->Subject = $subject;
        $mail->Body = $message;

        /**
         * Send Email
         */
        $mail->send();
        // echo 'Message sent!';

    } catch (Exception $e) {
        // echo 'Mailer error: ' . $mail->ErrorInfo;
    }

}
