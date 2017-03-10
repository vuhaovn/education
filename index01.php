<?php

$person = array (
    "firstname" => "Rurouri",
    "lastname" => "Kenshin",
    "age" => 19
);

echo "<pre>";
print_r($person);
echo "</pre>";

foreach ( $person as $key => $value ) {
    echo $value;
};

?>

