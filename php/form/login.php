<?php
session_start();
if(isset($_POST['ok'])){
  $u=$p="";
  if($_POST['txtuser'] == NULL){
    echo "Please enter your username <br />";
  }else{
    $u=$_POST['txtuser'];
  }
  if($_POST['txtpass'] == NULL){
    echo "Please enter your password <br />";
  }else{
    $p=$_POST['txtpass'];
  }
  if($u && $p){
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "demo_form";

    $connect = mysql_connect($hostname, $username, $password) or die("can't connect this database");;
    mysql_select_db($dbname, $connect) or die("can't choose this database");
    $sql="select * from user where username='$u' and password='$p'";
    $query=mysql_query($sql);
    if(mysql_num_rows($query) == 0){
      echo "Wrong username or password";
    }else{
      $data=mysql_fetch_assoc($query);
      $_SESSION['ses_username']=$data['username'];
      $_SESSION['ses_level']=$data['level'];
      $_SESSION['ses_userid']=$data['id'];
      header("location:list.php");
      exit();
    }
    
  }
}
?>
<form action='login.php' method='post'>
Username: <input type='text' name='txtuser' size='25' /><br />
Password: <input type='password' name='txtpass' size='25' /><br />
<input type='submit' name='ok' value='Login' />
</form>