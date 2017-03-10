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
  border: 1px solid #666666;
}

th {
  padding: 0 10px;
  border: 1px solid #666666;
  text-align: left;
}

td {
  border: 1px solid #666666;
  padding: 15px 10px;
}

a {
  color: #00baff;
}

</style>

<script>
function xacnhan(){
  if(!window.confirm("Do you want delete ?")){
    return false;
  }
}
</script>

</head>

<body>

<?php
session_start();
if($_SESSION['ses_level'] != 1){
  header("location:login.php");
  exit();
}

$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "demo_form";

$connect = mysql_connect($hostname, $username, $password) or die("can't connect this database");;
mysql_select_db($dbname, $connect) or die("can't choose this database");

$sql = "select * from contact";
$query = mysql_query($sql);

?>

  
<div id="form">
  <table>
    <tr>
      <th>Id</th>
      <th>Your Name</th>
      <th>Email</th>
      <th>Number Phone</th>
      <th>Your Address</th>
      <th>Add</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  <?php
    $stt = 0;
    while($data=mysql_fetch_assoc($query)){
    $stt++;
  ?>

    <tr>
      <td>
        <?php echo $stt; ?>
      </td>
      <td>
        <?php echo $data['name']; ?>
      </td>
      <td>
        <?php echo $data['email']; ?>
      </td>
      <td>
        <?php echo $data['phone']; ?>
      </td>
      <td>
        <?php echo $data['address']; ?>
      </td>
      <td><a href="index.php">Add</a></td>
      <td><a href="edit.php?uid=<?php echo $data['id']; ?>">Edit</a></td>
      <td><a href="delete.php?uid=<?php echo $data['id']; ?>" onclick="return xacnhan();">Delete</a></td>
    </tr>

  <?php
    }
  ?>

  </table>
<!-- /#form --></div>
  


</body>
</html>

