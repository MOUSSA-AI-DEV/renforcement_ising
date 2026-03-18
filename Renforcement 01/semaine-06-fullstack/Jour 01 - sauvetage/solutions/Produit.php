<?php
/**
 * SOLUTION — Model Produit avec PDO
 */
class Produit
{
    private PDO $db;

    public function __construct()
    {
        $this->db = Database::getInstance();
    }

    public function findAll(): array
    {
        $stmt = $this->db->query('SELECT * FROM produits ORDER BY nom ASC');
        return $stmt->fetchAll();
    }

    public function findById(int $id): ?array
    {
        $stmt = $this->db->prepare('SELECT * FROM produits WHERE id = ?');
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        return $row ?: null;
    }

    public function create(string $nom, float $prix, int $stock): int
    {
        $stmt = $this->db->prepare(
            'INSERT INTO produits (nom, prix, stock) VALUES (?, ?, ?)'
        );
        $stmt->execute([$nom, $prix, $stock]);
        return (int) $this->db->lastInsertId();
    }

    public function update(int $id, string $nom, float $prix, int $stock): bool
    {
        $stmt = $this->db->prepare(
            'UPDATE produits SET nom = ?, prix = ?, stock = ? WHERE id = ?'
        );
        $stmt->execute([$nom, $prix, $stock, $id]);
        return $stmt->rowCount() > 0;
    }

    public function delete(int $id): bool
    {
        $stmt = $this->db->prepare('DELETE FROM produits WHERE id = ?');
        $stmt->execute([$id]);
        return $stmt->rowCount() > 0;
    }
}
