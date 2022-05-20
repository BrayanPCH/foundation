<?php
include('Database.php');

// echo var_dump($_POST);
$namecat = $_POST["nameCat"];
$statuscat = $_POST["statusCat"];
$query = "INSERT INTO category(NAMECAT, STATUSCAT) VALUES('$namecat', $statuscat)";
$result = mysqli_query($db, $query);

$s = 0;
if (!$result) {
  die('Query Failed.' . mysqli_error($db));
}else{
  $s = 1;
}
echo $s;
