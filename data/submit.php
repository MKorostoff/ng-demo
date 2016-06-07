<?php
$data = file_get_contents("php://input");
$objData = json_decode($data);
$output = print_r($objData, true);
file_put_contents('/tmp/files.txt', $output);
// file_put_contents('/tmp/file.txt', 'hi');
