<?php

require_once 'vendor/autoload.php';
$faker = Faker\Factory::create();

$result = array();
for ($i=0; $i < 120; $i++) { 
  $first = $faker->firstName;
  $result[] = array(
    'id' => $i,
    'longName' => $first,
    'shortName' => substr($first, 0, 3),
    'lastName' => $last = $faker->lastName,
  );
}
print json_encode($result);
