<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/achiev30/PHPMailer/src/PHPMailer.php';
require '/home/achiev30/PHPMailer/src/Exception.php';
require '/home/achiev30/PHPMailer/src/OAuth.php';
require '/home/achiev30/PHPMailer/src/POP3.php';
require '/home/achiev30/PHPMailer/src/SMTP.php';

$data = file_get_contents("php://input");
$data = urldecode($data);
$data = ( explode( '"', $data ) );
$name = substr(strip_tags($data[3]), 0, 255);
$number = substr(strip_tags($data[7]), 0, 255);
$email = substr(strip_tags($data[11]), 0, 255);
$package = substr(strip_tags($data[19]), 0, 255);
$availability = substr(strip_tags($data[15]), 0, 3000);

if (($name=="")||($number=="")||($email=="")||($availability=="")) {
  echo "All fields are required, please fill in the form again.";
}
else {
  $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
  try {
      //Server settings
      $mail->SMTPDebug = 0;                                 // Enable verbose debug output
      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = 'secure199.inmotionhosting.com';  // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = 'contact_form@neurofeedback.achievefamilytherapy.com';                 // SMTP username
      $mail->Password = 'neurocontacter30';                           // SMTP password
      $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 465;                                    // TCP port to connect to

      //Recipients
      $mail->setFrom('contact_form@neurofeedback.achievefamilytherapy.com', 'Achieve Family Therapy');
      $mail->addAddress('contact_form@neurofeedback.achievefamilytherapy.com');               // Name is optional

      //Content
      $from="From: $name <br/><br/>Email: $email <br/><br/>Phone: $number";
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Message sent using the neurofeedback contact form';
      $mail->Body = "You have received a message from your neurofeedback site's contact page.<br/><br/>".$from."<br/><br/> Availability: ".$availability."<br/><br/> Package: ".$package;
      $mail->AltBody = "You have received a message from your neurofeedback site's contact page.<br/><br/>".$from."<br/><br/> Availability: ".$availability."<br/><br/> Package: ".$package;

      $mail->send();
      echo 'Message has been sent';
  } catch (Exception $e) {
      echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  }
}