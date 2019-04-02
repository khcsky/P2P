<?php
    // H5:CORS跨域
    header("Access-Control-Allow-Origin: http://127.0.0.1:3000");
    header('Access-Control-Allow-Headers:Authorization');
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,Authorization");


    // echo json_encode($_SESSION);
      echo $_SESSION['username'];

   
?>