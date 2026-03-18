<?php
/**
 * SOLUTION — Exercice 1 : Revision encapsulation et heritage
 */

abstract class Transport
{
    protected int $id;
    protected string $depart;
    protected string $destination;
    protected float $prixBase;

    public function __construct(int $id, string $depart, string $destination, float $prixBase)
    {
        $this->id = $id;
        $this->depart = $depart;
        $this->destination = $destination;
        $this->setPrixBase($prixBase);
    }

    public function getId(): int { return $this->id; }
    public function getDepart(): string { return $this->depart; }
    public function getDestination(): string { return $this->destination; }
    public function getPrixBase(): float { return $this->prixBase; }

    public function setPrixBase(float $prix): void
    {
        if ($prix <= 0) {
            throw new InvalidArgumentException("Le prix de base doit etre positif.");
        }
        $this->prixBase = $prix;
    }

    abstract public function calculerPrixFinal(): float;

    public function afficherInfos(): string
    {
        return sprintf(
            "Transport #%d : %s -> %s | Prix final : %.2f DH",
            $this->id, $this->depart, $this->destination, $this->calculerPrixFinal()
        );
    }
}

class Avion extends Transport
{
    private string $classeVoyage;

    private const MULTIPLICATEURS = [
        'economique' => 1.0,
        'business'   => 1.8,
        'premiere'   => 3.2,
    ];

    public function __construct(int $id, string $depart, string $destination, float $prixBase, string $classeVoyage)
    {
        parent::__construct($id, $depart, $destination, $prixBase);
        $this->setClasseVoyage($classeVoyage);
    }

    public function setClasseVoyage(string $classe): void
    {
        if (!array_key_exists($classe, self::MULTIPLICATEURS)) {
            throw new InvalidArgumentException("Classe invalide : {$classe}. Classes acceptees : " . implode(', ', array_keys(self::MULTIPLICATEURS)));
        }
        $this->classeVoyage = $classe;
    }

    public function calculerPrixFinal(): float
    {
        return $this->prixBase * self::MULTIPLICATEURS[$this->classeVoyage];
    }
}

class Train extends Transport
{
    private string $typeRail;

    private const MULTIPLICATEURS = [
        'regional'       => 1.0,
        'rapide'         => 1.3,
        'grande_vitesse' => 1.7,
    ];

    public function __construct(int $id, string $depart, string $destination, float $prixBase, string $typeRail)
    {
        parent::__construct($id, $depart, $destination, $prixBase);
        $this->typeRail = $typeRail;
    }

    public function calculerPrixFinal(): float
    {
        return $this->prixBase * (self::MULTIPLICATEURS[$this->typeRail] ?? 1.0);
    }
}

class Bus extends Transport
{
    private int $nbArrets;

    public function __construct(int $id, string $depart, string $destination, float $prixBase, int $nbArrets)
    {
        parent::__construct($id, $depart, $destination, $prixBase);
        $this->nbArrets = max(0, $nbArrets);
    }

    public function calculerPrixFinal(): float
    {
        if ($this->nbArrets === 0) {
            return $this->prixBase * 0.90;
        }
        return $this->prixBase + ($this->nbArrets * 5);
    }
}

// Tests
$avion = new Avion(1, 'Casablanca', 'Paris', 2500, 'business');
echo $avion->afficherInfos() . PHP_EOL;
// Transport #1 : Casablanca -> Paris | Prix final : 4500.00 DH

$train = new Train(2, 'Casablanca', 'Rabat', 80, 'grande_vitesse');
echo $train->afficherInfos() . PHP_EOL;
// Transport #2 : Casablanca -> Rabat | Prix final : 136.00 DH

$bus = new Bus(3, 'Marrakech', 'Agadir', 120, 3);
echo $bus->afficherInfos() . PHP_EOL;
// Transport #3 : Marrakech -> Agadir | Prix final : 135.00 DH

$busDirect = new Bus(4, 'Marrakech', 'Agadir', 120, 0);
echo $busDirect->afficherInfos() . PHP_EOL;
// Transport #4 : Marrakech -> Agadir | Prix final : 108.00 DH

try {
    $avionInvalide = new Avion(5, 'Casablanca', 'Dubai', 3000, 'cargo');
} catch (InvalidArgumentException $e) {
    echo "Exception attrapee : " . $e->getMessage() . PHP_EOL;
}
