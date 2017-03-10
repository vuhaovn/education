<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="vn" xml:lang="vn" dir="ltr">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta http-equiv="content-style-type" content="text/css" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta name="author" content="" />
<meta name="copyright" content="" />
<title>Demo Form Đăng Ký Thông Tin</title>

<style>

#form {
  width: 800px;
  margin: 0 auto;
}

table {
  width: 100%;
}

th {
  padding: 0 10px;
  text-align: left;
}

td {
  padding: 15px 10px;
}

input[type="text"] {
  padding: 0 0 0 10px;
  width: 300px;
  height: 25px;
}

input[type="submit"] {
  background: #000;
  color: #fff;
  border: none;
  width: 100px;
  height: 30px;
  cursor: pointer;
}

.request {
  display: inline-block;
  margin-left: 10px;
  color: #cc0000;
  display: block;
}

</style>

</head>

<body>

<?php

$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "demo_form";

$connect = mysql_connect($hostname, $username, $password) or die("can't connect this database");;
mysql_select_db($dbname, $connect) or die("can't choose this database");


if (isset($_POST['ok'])){

  $name = $_POST['txtname'];
  $email = $_POST['txtemail'];
  $phone = $_POST['txtphone'];
  $address = $_POST['txtaddress'];

  $sql = "insert into contact(name,email,phone,address) values('$name','$email','$phone','$address')";
  mysql_query($sql);
  header("location:thank.php");
  exit();

}

?>

<form action="" method="POST">
  
  <div id="form">
    <table>
      <tr>
        <th>Your Name</th>
        <td><input type="text" name="txtname" /></td>
      </tr>
      <tr>
        <th>Email</th>
        <td><input type="text" name="txtemail" /></td>
      </tr>
      <tr>
        <th>Number Phone</th>
        <td><input type="text" name="txtphone" /></td>
      </tr>
      <tr>
        <th>Your Address</th>
        <td><input type="text" name="txtaddress" /></td>
      </tr>
      <tr>
        <th></th>
        <td><input type="submit" name="ok" value="Đăng ký" /></td>
      </tr>
    </table>
  <!-- /#form --></div>
  
</form>


</body>
</html>

