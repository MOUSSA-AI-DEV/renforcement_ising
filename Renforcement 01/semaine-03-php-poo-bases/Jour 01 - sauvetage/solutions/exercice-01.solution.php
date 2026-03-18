<?php
/**
 * SOLUTION - Exercice 1
 */

class Utilisateur
{
    private static int $nextId = 1;
    private int $id;
    private string $nom;
    private string $prenom;
    private string $email;
    private string $motDePasse;
    private bool $actif;
    private string $dateCreation;

    public function __construct(string $nom, string $prenom, string $email, string $motDePasse)
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException("Email invalide : {$email}");
        }
        $this->id          = self::$nextId++;
        $this->nom         = $nom;
        $this->prenom      = $prenom;
        $this->email       = $email;
        $this->motDePasse  = password_hash($motDePasse, PASSWORD_DEFAULT);
        $this->actif       = true;
        $this->dateCreation = date('Y-m-d H:i:s');
    }

    public function getNomComplet(): string
    {
        return $this->prenom . ' ' . $this->nom;
    }

    public function verifierMotDePasse(string $motDePasse): bool
    {
        return password_verify($motDePasse, $this->motDePasse);
    }

    public function changerEmail(string $nouvelEmail): void
    {
        if (!filter_var($nouvelEmail, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException("Email invalide : {$nouvelEmail}");
        }
        $this->email = $nouvelEmail;
    }

    public function desactiver(): void
    {
        $this->actif = false;
    }

    public function toArray(): array
    {
        return [
            'id'          => $this->id,
            'nom'         => $this->nom,
            'prenom'      => $this->prenom,
            'email'       => $this->email,
            'actif'       => $this->actif,
            'dateCreation'=> $this->dateCreation,
        ];
    }

    public function getId(): int { return $this->id; }
    public function getEmail(): string { return $this->email; }
    public function isActif(): bool { return $this->actif; }
}
