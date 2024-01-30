<?php
$servername = "mysql_server"; // Replace with your MySQL server address
$username = "group5"; // Replace with your MySQL username
$password = "group5dcpe"; // Replace with your MySQL password

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create a new database
$databaseName = "group5db"; // Replace with your desired database name
$sql = "CREATE DATABASE $databaseName";

if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?>
