<?php
	$fio = $_POST['first_name'];
	$email = $_POST['email'];
	$question = $_POST['question'];

	$fio = htmlspecialchars($fio);
	$email = htmlspecialchars($email);
	$question = htmlspecialchars($question);

	$fio = urldecode($fio);
	$email = urldecode($email);
	$question = urldecode($question);

	$fio = trim($fio);
	$email = trim($email);
	$question = trim($question);

	function checkEmail($email) {
	    if(preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/",$email)){
	        list($username,$domain)=split('@',$email);
	            if(!checkdnsrr($domain,'MX')) {
	                return false;
	            }
	        return true;
	        }
	    return false;
	}
	if (checkEmail($email)) {
		if (mail("mymail001@mail.ru", "Обращение с сайта", "ФИО:".$fio.". E-mail: ".$email , "Обращение:".$question, "From: example2@mail.ru \r\n")) {
			echo "<script>alert(\"Сообщение успешно отправлено.\");</script>";
			echo "<script>window.location.href = \"index.php#qa\";</script>";
		} else { 
	    	echo "<script>alert(\"При отправке сообщения возникла ошибка.\");</script>";
			echo "<script>window.location.href = \"index.php#qa\";</script>";
		}
	} else {
		echo "<script>alert(\"Некорректный E-mail.\");</script>";
		echo "<script>window.location.href = \"index.php#qa\";</script>";
	}
	
?>