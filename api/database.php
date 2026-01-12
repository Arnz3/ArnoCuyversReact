<?php
$host     = 'db';  // De naam van de service in je docker-compose.yml
$user     = 'root';
$password = 'wachtwoord'; // Het wachtwoord dat je in docker-compose hebt ingesteld
$database = 'mijn_database';

// Maak verbinding
$conn = new mysqli($host, $user, $password, $database);

// Controleer verbinding
if ($conn->connect_error) {
    die("❌ Verbinding mislukt: " . $conn->connect_error);
}

echo "✅ Succesvol verbonden met de MySQL database!<br>";
echo "Host informatie: " . $conn->host_info;

$conn->close();
?>