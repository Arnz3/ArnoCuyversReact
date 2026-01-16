<?php
// CORS Headers (Nodig als React op een andere poort draait, bijv. localhost:3000)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 1. Data opvangen (JSON input decoderen)
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$tel = $data['tel'] ?? '';
$project = $data['project'] ?? '';
$message = $data['message'] ?? '';

//TODO: add validation function

if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // 2. Database verbinding
    $conn = new mysqli("db", "root", "wachtwoord", "mijn_database");

    if ($conn->connect_error) {
        echo json_encode(["success" => false, "message" => "DB Fout"]);
        exit;
    }

    // 3. Opslaan met een Prepared Statement (Veilig tegen SQL-injectie!)
    $stmt = $conn->prepare("INSERT INTO contact (name, email, tel, project) VALUES (?,?,?,?)");
    $stmt->bind_param("ssss",$name, $email, $tel, $project);

    include('mail.php');

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Opgeslagen"]);
    } else {
        echo json_encode(["success" => false, "message" => "Kon niet opslaan"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Ongeldig e-mailadres"]);
}
?>