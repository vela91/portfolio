<?php 
 
	if(isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])){
		
		$to = "jvela911223@gmail.com"; //this is your Email address
		$from = $_POST['name'];
		$username = $_POST['name'];
		$email = $_POST['email'];
		$subj = $_POST['subject'];
		$message = $_POST['message'];


		$subject = "Form submission";
		$message = $username . "\n" . $email . "\n" . $subj . "\n" . $message;

		$headers = "From:" . $from;


		if (mail($to, $subject, $message, $headers)) {

		    echo "success";

		} else {

			echo "failed";

		}

	}		

?>