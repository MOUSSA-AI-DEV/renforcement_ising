/**
 * EXERCICE 1 — Client HTTP : wrapper fetch avec gestion d erreurs centralisee
 *
 * Les exercices Fetch utilisent JSONPlaceholder : https://jsonplaceholder.typicode.com
 *
 * A implementer :
 *
 * class HttpClient
 *   constructor(baseUrl, options = {})
 *     baseUrl : URL de base (ex: "https://jsonplaceholder.typicode.com")
 *     options : headers par defaut, timeout, etc.
 *
 *   async get(endpoint, params = {})
 *     Construire l URL avec les query params
 *     Ex : client.get("/posts", { userId: 1 }) => GET /posts?userId=1
 *
 *   async post(endpoint, body)
 *
 *   async put(endpoint, body)
 *
 *   async delete(endpoint)
 *
 *   async request(method, endpoint, body = null, params = {})
 *     Methode centrale utilisee par get/post/put/delete
 *     Gerer :
 *     - Les headers Content-Type: application/json
 *     - Les codes d erreur HTTP (400, 401, 403, 404, 500) avec des messages differents
 *     - Le timeout : si la requete prend plus de 5s, rejeter avec "Timeout depassé"
 *       (utiliser Promise.race avec un setTimeout)
 *     - Retourner { data, status, headers } en cas de succes
 *
 * Tests :
 * const client = new HttpClient("https://jsonplaceholder.typicode.com");
 * 1. GET /posts?userId=1 => afficher les titres des posts de l utilisateur 1
 * 2. POST /posts avec { title: "Test", body: "Contenu", userId: 1 } => afficher l id cree
 * 3. PUT /posts/1 avec un titre modifie => afficher la confirmation
 * 4. DELETE /posts/1 => afficher le statut
 * 5. GET /posts/99999 => verifier la gestion de l erreur 404
 */

// Votre code ici
