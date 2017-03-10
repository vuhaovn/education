<?php

$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "demo_form";

$connect = mysql_connect($hostname, $username, $password) or die("can't connect this database");;
mysql_select_db($dbname, $connect) or die("can't choose this database");

$id=$_GET['uid'];

if (isset($_POST['ok'])){

  $name = $_POST['txtname'];
  $email = $_POST['txtemail'];
  $phone = $_POST['txtphone'];
  $address = $_POST['txtaddress'];

  $sql="update contact set name='$name', email='$email' , phone='$phone' , address='$address' where id='$id'";
  mysql_query($sql);
  header("location:list.php");
  exit();

}

$sql="select * from contact where id='$id'";
$query=mysql_query($sql);
$data=mysql_fetch_assoc($query);

?>
<form action="edit.php?uid=<?php echo $data['id'];?>" method="POST">

  <div id="form">
    <table>
      <tr>
        <th>Your Name</th>
        <td><input type="text" name="txtname" value="<?php echo $data['name']; ?>" /></td>
      </tr>
      <tr>
        <th>Email</th>
        <td><input type="text" name="txtemail" value="<?php echo $data['email']; ?>" /></td>
      </tr>
      <tr>
        <th>Number Phone</th>
        <td><input type="text" name="txtphone" value="<?php echo $data['phone']; ?>" /></td>
      </tr>
      <tr>
        <th>Your Address</th>
        <td><input type="text" name="txtaddress" value="<?php echo $data['address']; ?>" /></td>
      </tr>
      <tr>
        <th></th>
        <td><input type="submit" name="ok" value="Update" /></td>
      </tr>
    </table>
  <!-- /#form --></div>

</form>