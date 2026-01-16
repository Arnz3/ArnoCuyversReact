<?php

$to = "info@arnocuyvers.be";
$subject = "$name - $project";

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = "From: Website Contact <info@jouwdomein.nl>";
$headers[] = "Reply-To: $email";


$mail = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { width: 100%; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
        .header { background-color: #4A90E2; color: #ffffff; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .table td { padding: 10px; border-bottom: 1px solid #eee; }
        .label { font-weight: bold; width: 30%; color: #666; }
        .footer { background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #999; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nieuw Bericht</h2>
        </div>
        <div class='content'>
            <p>Er is een nieuw bericht binnengekomen via de website:</p>
            <table class='table'>
                <tr><td class='label'>Naam:</td><td>{$name}</td></tr>
                <tr><td class='label'>E-mail:</td><td>{$email}</td></tr>
                <tr><td class='label'>Telefoon:</td><td>{$tel}</td></tr>
                <tr><td class='label'>Project:</td><td>{$project}</td></tr>
            </table>
            <p><strong>Bericht:</strong></p>
            <p style='background: #f4f4f4; padding: 15px; border-radius: 5px;'>{$message}</p>
        </div>
        <div class='footer'>
            Deze e-mail is automatisch verzonden vanaf uw contactformulier.
        </div>
    </div>
</body>
</html>
";

if(mail($to, $subject, $mail, implode("\r\n", $headers))){
    echo "E-mail succesvol verzonden!";
} else {
    echo "Verzending mislukt.";
}

?>