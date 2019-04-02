<?php
  // H5:CORS跨域
  header("Access-Control-Allow-Origin: http://127.0.0.1:3000");
  header('Access-Control-Allow-Headers:Authorization');
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,Authorization");
 header('Content-Type: text/html;charset=utf-8');
  //接受参数
  $username = $_POST['username'];
  $password = $_POST['password']; 
    // 2.1 获取数据库连接
 $conn = mysqli_connect('localhost','root','root','p2p',3306) or die('Error');

 $querySQL="insert into t_user(username,password) values('$username','$password')";

 $rs = mysqli_query($conn, $querySQL);

if( $rs===1 || $rs===true){
  echo json_encode('{"success":true}');
}else{
      echo json_encode('{"success":false,"message":"用户名存在"}');
     }

//  $num = mysqli_num_rows($rs);

//  if( $num > 0){
//   echo json_encode('{"success":true}');
//   }else{
//    echo json_encode('{"success":false,"message":"用户名存在"}');
//   }


//  注册用户数据
