<?php
/**
 * SMTP-configuratie voor het contactformulier.
 *
 * Kopieer dit bestand op de server naar: contact-config.php
 * en vul het wachtwoord in. Dit bestand staat NIET in git.
 */
return [
    'smtp_host'     => 'mail.site.eu',
    'smtp_port'     => 465,
    'smtp_user'     => 'website@viamano.be',
    'smtp_password' => 'VUL_HIER_HET_WACHTWOORD_IN',
    'from_email'    => 'website@viamano.be',
    'from_name'     => 'Viamano',
    'to_email'      => 'karen@viamano.be',
];
