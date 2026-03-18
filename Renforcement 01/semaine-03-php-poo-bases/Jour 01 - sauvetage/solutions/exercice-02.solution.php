<?php
/**
 * SOLUTION - Exercice 2
 */

class Produit
{
    private static int $nextId = 1;
    private int $id;
    private string $nom;
    private string $description;
    private float $prix;
    private int $stock;
    private string $categorie;
    private bool $actif;

    public function __construct(string $nom, float $prix, int $stock, string $categorie)
    {
        if ($prix <= 0) throw new InvalidArgumentException("Le prix doit etre superieur a 0.");
        if ($stock < 0) throw new InvalidArgumentException("Le stock ne peut pas etre negatif.");

        $this->id        = self::$nextId++;
        $this->nom       = $nom;
        $this->description = '';
        $this->prix      = $prix;
        $this->stock     = $stock;
        $this->categorie = $categorie;
        $this->actif     = true;
    }

    public function approvisionner(int $quantite): void
    {
        if ($quantite <= 0) throw new InvalidArgumentException("La quantite doit etre positive.");
        $this->stock += $quantite;
    }

    public function vendre(int $quantite): float
    {
        if ($quantite <= 0) throw new InvalidArgumentException("La quantite doit etre positive.");
        if ($quantite > $this->stock) throw new RuntimeException("Stock insuffisant. Disponible : {$this->stock}");
        $this->stock -= $quantite;
        return $this->prix * $quantite;
    }

    public function appliquerRemise(float $pourcentage): void
    {
        if ($pourcentage < 1 || $pourcentage > 50) {
            throw new InvalidArgumentException("La remise doit etre entre 1% et 50%.");
        }
        $this->prix = round($this->prix * (1 - $pourcentage / 100), 2);
    }

    public function estDisponible(): bool
    {
        return $this->actif && $this->stock > 0;
    }

    public function toArray(): array
    {
        return [
            'id'        => $this->id,
            'nom'       => $this->nom,
            'prix'      => $this->prix,
            'stock'     => $this->stock,
            'categorie' => $this->categorie,
            'actif'     => $this->actif,
        ];
    }

    public function getId(): int   { return $this->id; }
    public function getNom(): string { return $this->nom; }
    public function getPrix(): float { return $this->prix; }
    public function getStock(): int  { return $this->stock; }
}
