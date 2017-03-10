<?php

$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "demo_form";

$connect = mysql_connect($hostname, $username, $password) or die("can't connect this database");;
mysql_select_db($dbname, $connect) or die("can't choose this database");

$id=$_GET['uid'];
$sql="delete from contact where id='$id'";
mysql_query($sql);
header("location:list.php");
exit();


?>
