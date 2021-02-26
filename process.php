<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "dhvanishah192001@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);
    
    header('Location: http://dshah1901.github.io/success.html');
  }