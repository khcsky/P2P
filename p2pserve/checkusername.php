<?php
  // H5:CORS跨域
  header("Access-Control-Allow-Origin: http://127.0.0.1:3000");
  header('Access-Control-Allow-Headers:Authorization');
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,Authorization");
 header('Content-Type: text/html;charset=utf-8');
  //接受参数
   $username = $_GET['username'];
   // 2.1 获取数据库连接
 $conn = mysqli_connect('localhost','root','root','p2p',3306) or die('Error');

  //查询用户名是否存在
 $querySQL = "select * from t_user where username='$username' ";
  // 2.3 执行sql
  $rs = mysqli_query($conn, $querySQL);
  $num = mysqli_num_rows($rs);
   if( $num > 0){
    echo json_encode('{"success":true}');
    }else{
     echo json_encode('{"success":false,"message":"用户名存在"}');
    }

  