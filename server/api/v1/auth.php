<?php

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == 'admin' && $password == 'admin'){
        $_SESSION['user'] = 'admin';
        ?>
        {
            "success": true,
            "message": "Secret Message"
        }
    <?php 
    } else {
        ?>
        {
            "success": false,
            "message": "Invalid credentials"
        }
    <?php
    }
 } else {
     ?>
        {
            "success": false,
            "message": "Only POST method is allowed"
        }
<?php
}
?>