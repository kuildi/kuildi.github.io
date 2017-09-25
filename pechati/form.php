<?php
$code = 1;$error = true;$name_input = array();

$to_name = 'mskpechati5.ru';//Отправитель
$to_email = 'ms-k@pechati5.ru';//Ваш E-mail

if(isset($_POST["name"])){

  $name = $_POST["name"];
  $phone = preg_replace('/[^0-9]/', '', trim($_POST["phone"]));
  $name777 = $_POST["name777"];

  if($name == '' or strlen($name) < 2 or strlen($name) > 50){$name_input[] = 'name'; $error = false;}
  if($phone == '' or strlen($phone) < 5 or strlen($phone) > 50){$name_input[] = 'phone'; $error = false;}


  if($error){

  	$header = "From: \"$to_name\" <no-reply@".$_SERVER['HTTP_HOST'].">\n";
    $header .= "Content-type: text/plain; charset=\"utf-8\"";
    $subject = "Новая заявка"; //Тема письма
    $message = "Форма: $name777\n\nИмя: $name\nТелефон: $phone"; //Сообщение
    if($mess != ''){
      $message .= "Текст сообщения:$mess\n";
    }

    mail($to_email, $subject, $message, $header);

    $code = 0;
  }
}
$data_str = array('code' => $code, 'input' => $name_input);
echo json_encode($data_str);
?>