


const express = require('express'); //import de express comme un iclude//
const app = express(); //mon serveur(app) est le serveur express (vide)//
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello from Music Room server');
}); //reponse du serveur basique lors d'une connexion a la page 'HOME'('/')//

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
}); //le serveur ecoute le port 3000//
