<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://viamano.be');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Alleen POST-verzoeken zijn toegestaan.']);
    exit;
}

// Honeypot — als dit veld ingevuld is, is het spam
if (!empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

$naam      = trim($_POST['naam'] ?? '');
$email     = trim($_POST['email'] ?? '');
$onderwerp = trim($_POST['onderwerp'] ?? '');
$bericht   = trim($_POST['bericht'] ?? '');

if ($naam === '' || $email === '' || $bericht === '') {
    http_response_code(422);
    echo json_encode(['error' => 'Vul alle verplichte velden in.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['error' => 'Ongeldig e-mailadres.']);
    exit;
}

$aan = 'karen@viamano.be';

$onderwerpRegel = '=?UTF-8?B?' . base64_encode("Viamano.be — $onderwerp") . '?=';

$body  = "Nieuw bericht via viamano.be\n";
$body .= "─────────────────────────────\n\n";
$body .= "Naam:      $naam\n";
$body .= "E-mail:    $email\n";
$body .= "Onderwerp: $onderwerp\n\n";
$body .= "Bericht:\n\n$bericht\n";

$headers  = "From: noreply@viamano.be\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: Viamano-Contactformulier\r\n";

$verzonden = mail($aan, $onderwerpRegel, $body, $headers);

if ($verzonden) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'E-mail kon niet verzonden worden. Probeer het later opnieuw.']);
}
