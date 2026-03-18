<?php
/**
 * SOLUTION — Exercice 2 : Heritage multi-niveau + logique metier RH
 */

class Employe
{
    protected int $id;
    protected string $nom;
    protected string $prenom;
    protected float $salaireBase;

    public function __construct(int $id, string $nom, string $prenom, float $salaireBase)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->setSalaireBase($salaireBase);
    }

    public function getId(): int { return $this->id; }
    public function getNom(): string { return $this->nom; }
    public function getPrenom(): string { return $this->prenom; }
    public function getSalaireBase(): float { return $this->salaireBase; }

    public function setSalaireBase(float $salaire): void
    {
        if ($salaire <= 0) throw new InvalidArgumentException("Le salaire de base doit etre positif.");
        $this->salaireBase = $salaire;
    }

    public function calculerSalaire(): float
    {
        return $this->salaireBase;
    }

    public function calculerPrime(): float
    {
        return 0.0;
    }

    public function genererFichePaie(): string
    {
        $salaire = $this->calculerSalaire();
        $prime   = $this->calculerPrime();
        $net     = $salaire + $prime;

        return sprintf(
            "Fiche de paie - %s %s\n  Salaire : %.2f DH\n  Prime : %.2f DH\n  Net : %.2f DH",
            $this->nom, $this->prenom, $salaire, $prime, $net
        );
    }
}

class EmployeCDI extends Employe
{
    private int $anciennete;

    public function __construct(int $id, string $nom, string $prenom, float $salaireBase, int $anciennete)
    {
        parent::__construct($id, $nom, $prenom, $salaireBase);
        $this->anciennete = max(0, $anciennete);
    }

    public function getAnciennete(): int { return $this->anciennete; }

    public function calculerSalaire(): float
    {
        return $this->salaireBase + ($this->anciennete * $this->salaireBase * 0.03);
    }

    public function calculerPrime(): float
    {
        if ($this->anciennete >= 5) {
            return $this->calculerSalaire() * 0.15;
        }
        return 0.0;
    }
}

class EmployeCDD extends Employe
{
    private int $dureeMois;
    private float $tauxMajoration;

    public function __construct(int $id, string $nom, string $prenom, float $salaireBase, int $dureeMois, float $tauxMajoration)
    {
        parent::__construct($id, $nom, $prenom, $salaireBase);
        $this->dureeMois      = $dureeMois;
        $this->tauxMajoration = $tauxMajoration;
    }

    public function calculerSalaire(): float
    {
        return $this->salaireBase * (1 + $this->tauxMajoration);
    }

    public function calculerPrime(): float
    {
        return 0.0;
    }
}

class Manager extends EmployeCDI
{
    private int $nbSubordonnes;
    private float $budget;

    public function __construct(int $id, string $nom, string $prenom, float $salaireBase, int $anciennete, int $nbSubordonnes, float $budget)
    {
        parent::__construct($id, $nom, $prenom, $salaireBase, $anciennete);
        $this->nbSubordonnes = $nbSubordonnes;
        $this->budget        = $budget;
    }

    public function calculerSalaire(): float
    {
        return parent::calculerSalaire() + ($this->nbSubordonnes * 200);
    }

    public function calculerPrime(): float
    {
        $prime = parent::calculerPrime();
        if ($this->budget > 500000) {
            $prime += $this->budget * 0.05;
        }
        return $prime;
    }
}

class Entreprise
{
    private string $nom;
    private array $employes = [];

    public function __construct(string $nom)
    {
        $this->nom = $nom;
    }

    public function ajouterEmploye(Employe $e): void
    {
        $this->employes[] = $e;
    }

    public function getMasseSalariale(): float
    {
        return array_sum(array_map(fn($e) => $e->calculerSalaire(), $this->employes));
    }

    public function getPrimesTotales(): float
    {
        return array_sum(array_map(fn($e) => $e->calculerPrime(), $this->employes));
    }

    public function getEmployesPrime(): array
    {
        return array_filter($this->employes, fn($e) => $e->calculerPrime() > 0);
    }

    public function getRapportSalarial(): string
    {
        $lignes = ["=== Rapport salarial — {$this->nom} ==="];
        foreach ($this->employes as $e) {
            $lignes[] = $e->genererFichePaie();
            $lignes[] = str_repeat('-', 40);
        }
        $lignes[] = sprintf("Masse salariale totale : %.2f DH", $this->getMasseSalariale());
        $lignes[] = sprintf("Primes totales : %.2f DH", $this->getPrimesTotales());
        return implode("\n", $lignes);
    }
}

// Tests
$entreprise = new Entreprise('TechCorp');

$amine = new EmployeCDI(1, 'Benjelloun', 'Amine', 5000, 7);
$sara  = new EmployeCDD(2, 'Tazi', 'Sara', 4000, 6, 0.10);
$karim = new Manager(3, 'Alaoui', 'Karim', 8000, 3, 5, 800000);

$entreprise->ajouterEmploye($amine);
$entreprise->ajouterEmploye($sara);
$entreprise->ajouterEmploye($karim);

echo $entreprise->getRapportSalarial() . PHP_EOL;
echo PHP_EOL . "Employes avec prime :" . PHP_EOL;
foreach ($entreprise->getEmployesPrime() as $e) {
    echo "  - " . $e->getNom() . " " . $e->getPrenom() . " : " . $e->calculerPrime() . " DH" . PHP_EOL;
}
