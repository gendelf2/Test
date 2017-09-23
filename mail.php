  <?php
  $to = "igrock95@mail.ru";
  $mail = htmlspecialchars($_POST['Email']);
  $name = htmlspecialchars($_POST['Name']);
  $phone =htmlspecialchars($_POST['Message']);
  mail($to,"заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
        "Ваше ім'я: ".$name."\nEmail: ".$mail."\nВаше повідомлення :".$phone. "\n Поздравляем с успешной регистрацией");
?>
