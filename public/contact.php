<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Alleen POST-verzoeken zijn toegestaan.']);
    exit;
}

// Honeypot
if (!empty($_POST['website'])) {
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

$configFile = __DIR__ . '/contact-config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'Mailconfiguratie ontbreekt op de server.']);
    exit;
}

$cfg = require $configFile;

$subject = "Viamano.be — $onderwerp";

$body  = "Nieuw bericht via viamano.be\r\n";
$body .= "─────────────────────────────\r\n\r\n";
$body .= "Naam:      $naam\r\n";
$body .= "E-mail:    $email\r\n";
$body .= "Onderwerp: $onderwerp\r\n\r\n";
$body .= "Bericht:\r\n\r\n$bericht\r\n";

$result = smtpSend($cfg, $subject, $body, $email, $naam);

if ($result === true) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'E-mail kon niet verzonden worden. Probeer het later opnieuw.', 'debug' => $result]);
}

function smtpSend(array $cfg, string $subject, string $body, string $replyTo, string $replyName): string|true
{
    $host = 'ssl://' . $cfg['smtp_host'];
    $port = $cfg['smtp_port'];

    $sock = @fsockopen($host, $port, $errno, $errstr, 10);
    if (!$sock) {
        return "Verbinding mislukt: $errstr ($errno)";
    }

    stream_set_timeout($sock, 10);

    $greeting = smtpRead($sock);
    if (substr($greeting, 0, 3) !== '220') return "Geen 220: $greeting";

    smtpWrite($sock, "EHLO viamano.be");
    $ehlo = smtpRead($sock);
    if (substr($ehlo, 0, 3) !== '250') return "EHLO mislukt: $ehlo";

    smtpWrite($sock, "AUTH LOGIN");
    $auth = smtpRead($sock);
    if (substr($auth, 0, 3) !== '334') return "AUTH mislukt: $auth";

    smtpWrite($sock, base64_encode($cfg['smtp_user']));
    $user = smtpRead($sock);
    if (substr($user, 0, 3) !== '334') return "User mislukt: $user";

    smtpWrite($sock, base64_encode($cfg['smtp_password']));
    $pass = smtpRead($sock);
    if (substr($pass, 0, 3) !== '235') return "Wachtwoord mislukt: $pass";

    smtpWrite($sock, "MAIL FROM:<{$cfg['from_email']}>");
    $from = smtpRead($sock);
    if (substr($from, 0, 3) !== '250') return "MAIL FROM mislukt: $from";

    smtpWrite($sock, "RCPT TO:<{$cfg['to_email']}>");
    $rcpt = smtpRead($sock);
    if (substr($rcpt, 0, 3) !== '250') return "RCPT TO mislukt: $rcpt";

    smtpWrite($sock, "DATA");
    $data = smtpRead($sock);
    if (substr($data, 0, 3) !== '354') return "DATA mislukt: $data";

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $msg  = "From: {$cfg['from_name']} <{$cfg['from_email']}>\r\n";
    $msg .= "To: <{$cfg['to_email']}>\r\n";
    $msg .= "Reply-To: $replyName <$replyTo>\r\n";
    $msg .= "Subject: $encodedSubject\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "Date: " . date('r') . "\r\n";
    $msg .= "\r\n";
    $msg .= $body;
    $msg .= "\r\n.\r\n";

    smtpWrite($sock, $msg);
    $sent = smtpRead($sock);
    if (substr($sent, 0, 3) !== '250') return "Verzending mislukt: $sent";

    smtpWrite($sock, "QUIT");
    fclose($sock);

    return true;
}

function smtpWrite($sock, string $data): void
{
    fwrite($sock, $data . "\r\n");
}

function smtpRead($sock): string
{
    $response = '';
    while ($line = fgets($sock, 512)) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') break;
    }
    return trim($response);
}
