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

// echo $username;
 // 2.1 获取数据库连接
 $conn = mysqli_connect('localhost','root','root','p2p',3306) or die('Error');

 // 2.2 执行SQL
 $querySQL = "select * from t_user where username='$username' and password='$password' ";
  // 2.3 执行sql
  $rs = mysqli_query($conn, $querySQL);
  // 2.4 总数据条数：
  $num = mysqli_num_rows($rs);

//   3. 返回结果
  if($num >0){
     // 记录session
     $_SESSION['username'] = $username;
    echo '{"success":true}';
  }else{
    echo '{"success":false,"message":"用户名或密码错误！"}';
  }