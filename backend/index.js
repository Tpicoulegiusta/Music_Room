


const express = require('express'); //import de express comme un iclude//
const app = express(); //mon serveur(app) est le serveur express (vide)//
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello from Music Room server\n');
}); //reponse du serveur basique lors d'une connexion a la page 'HOME'('/')//

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
}); //le serveur ecoute le port 3000//

app.get('/rooms', (req, res) => {
	res.json([
		{id: 1, name: 'Jazz Club', users: 3},
		{id: 2, name: 'Rock Arena', users: 12}
	]);
}); // reponse du serveur lorsque le client arrive dans /rooms//

app.get('/rooms/:id', (req, res) => {
	const roomId = req.params.id; //express extrait automatiquement l'id pour le mettre dans param//
	res.json({
		id: roomId,
		name: `Room ${roomId}`,
		users: 5
	});
}); //reponse si url dynamique (id de la room different)//
