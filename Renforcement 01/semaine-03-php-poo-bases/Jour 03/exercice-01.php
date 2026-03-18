<?php
/**
 * EXERCICE 1 - Systeme de notifications multi-canal
 *
 * =====================================================================
 * Classe abstraite Notification :
 *   Proprietes : id, destinataire (string), contenu (string),
 *                dateEnvoi (nullable), statut ('en_attente'|'envoye'|'echec')
 *
 * Methodes abstraites :
 *   envoyer() : bool
 *     Doit etre implementee par chaque sous-classe.
 *     Retourne true si l'envoi simule est un succes.
 *
 * Methodes concretes :
 *   getResume() : string
 *     Retourner "[TYPE] A: destinataire | Statut: statut | contenu (30 premiers chars)"
 *     TYPE = nom de la classe (EmailNotification, SmsNotification, etc.)
 *
 *   marquerEnvoye() : void    (protected)
 *   marquerEchec(string $raison) : void   (protected)
 *
 * =====================================================================
 * Classe EmailNotification extends Notification :
 *   Proprietes supplementaires : expediteur (string), sujet (string),
 *                                 piecesJointes (array)
 *
 * envoyer() : bool
 *   Valider que destinataire est un email valide.
 *   Simuler un envoi (sleep(0) ou juste retourner true apres marquage).
 *   Marquer envoye ou echec selon validation.
 *
 * ajouterPieceJointe(string $fichier) : void
 *
 * =====================================================================
 * Classe SmsNotification extends Notification :
 *   Proprietes supplementaires : numeroTelephone (string)
 *
 * envoyer() : bool
 *   Valider le format du telephone (10 chiffres, commence par 06 ou 07).
 *   Verifier que le contenu ne depasse pas 160 caracteres.
 *   Marquer envoye ou echec.
 *
 * =====================================================================
 * Classe PushNotification extends Notification :
 *   Proprietes supplementaires : tokenAppareil (string), titre (string),
 *                                 donnees (array, optionnel)
 *
 * envoyer() : bool
 *   Valider que tokenAppareil n'est pas vide.
 *   Simuler envoi, marquer resultat.
 *
 * =====================================================================
 * Classe NotificationService :
 *   Proprietes : notifications (Notification[])
 *
 * Methodes :
 *
 *   ajouter(Notification $n) : void
 *
 *   envoyerToutes() : array
 *     Envoyer toutes les notifications en attente.
 *     Retourner { 'envoyes' => N, 'echecs' => N, 'details' => [...] }
 *
 *   getParStatut(string $statut) : array
 *
 *   statistiques() : array
 *     { 'total' => N, 'envoyes' => N, 'echecs' => N, 'en_attente' => N,
 *       'parType' => { 'Email' => N, 'SMS' => N, 'Push' => N } }
 */

// Votre implementation

// Tests
$service = new NotificationService();

$email1 = new EmailNotification('h.alami@email.ma', 'Confirmation commande',
    'Votre commande CMD-001 a bien ete validee.', 'noreply@shop.ma',
    'Confirmation commande #CMD-001');

$email2 = new EmailNotification('email-invalide', 'Test',
    'Ce message ne sera pas envoye.', 'noreply@shop.ma', 'Test');

$sms1 = new SmsNotification('0612345678', 'Votre code OTP est : 482917. Valable 5 minutes.');

$sms2 = new SmsNotification('0512345678', // Numero invalide
    'Test SMS');

$push1 = new PushNotification('device_token_abc123', 'Nouvelle commande !',
    'La commande CMD-002 vient d'etre passee.', 'Notification');

$service->ajouter($email1);
$service->ajouter($email2);
$service->ajouter($sms1);
$service->ajouter($sms2);
$service->ajouter($push1);

$resultats = $service->envoyerToutes();
echo "Envoyes : " . $resultats['envoyes'] . PHP_EOL;
echo "Echecs : " . $resultats['echecs'] . PHP_EOL;

print_r($service->statistiques());
