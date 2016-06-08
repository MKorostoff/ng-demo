<?php
$data = file_get_contents("php://input");
$data = json_decode($data);
$data = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents('/tmp/files.txt', $data);
