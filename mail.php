<?php
if ($_POST){
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];
    //$headers = "MIME-Version: 1.0\r\n";
    //$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    //$headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";
    $subject = "Contact Terradia";
    $destinataire = "contact@terradia.eu";
    $body="$message";
    mail($destinataire,$subject,$body);
    /*if(mail($destinataire,$subject,$body)){
        $response['status'] = 'Succès';
        $response['msg'] = 'Email envoyé avec succès';
    } else {
        $response['status'] = 'Erreur';
        $response['msg'] = 'Une erreur est survenue';
    }*/
    //echo $response;
}
?>