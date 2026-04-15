<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "lastmina01@gmail.com";
    $subject = "New message from your website ";
    
    $body = "Name: $name \n" . "Email: $email \n\n" . "\"\" $message \"\"";

    $headers = "From: $email";
    mail($to,$subject,$body,$headers);
    
    echo "message sent successfully !";
    
};