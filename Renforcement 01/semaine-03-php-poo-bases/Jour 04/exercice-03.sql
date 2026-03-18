-- EXERCICE 3 - Procedures stockees et transactions
-- Utiliser le schema schema-ecole.sql

-- 1. Creer une procedure stockee `sp_ajouter_note`
--    Parametres : p_apprenant_id, p_module_id, p_type, p_note, p_date
--    - Verifier que l'apprenant existe et est actif
--    - Verifier que p_note est entre 0 et 20
--    - Verifier que le module existe
--    - Inserer la note si tout est OK
--    - Retourner un message de succes ou d'erreur

-- 2. Creer une procedure `sp_bilan_apprenant`
--    Parametre : p_apprenant_id
--    Retourner un bilan complet :
--    - Ligne par module : note_moyenne, taux_presence, statut_module (admis/echec)
--    - Moyenne generale ponderee
--    - Statut global (admis / rattrapage / echec)
--    - Rattrapage si 8 <= moyenne < 10

-- 3. Creer une transaction qui effectue un "passage en annee superieure" :
--    - Verifier que tous les apprenants de la promotion 1 ont leurs notes
--    - Calculer les moyennes
--    - Mettre a jour le statut des apprenants (admis / redoublant)
--    - Si une erreur survient, ROLLBACK
--    - Consigner dans une table `journal_promotions` (a creer)

-- Procedure 1


-- Procedure 2


-- Transaction 3

