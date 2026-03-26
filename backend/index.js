


const express = require('express'); //import de express comme un iclude//
const app = express(); //mon serveur(app) est le serveur express (vide)//
const port = 3000;

let rooms = [
	{ id: 1, name: 'Jazz Club', users: 3 },
	{ id: 2, name: 'Gay Rock Arena', users: 12 }
];


app.use(express.json());


app.get('/', (req, res) => {
	res.send('Hello from Music Room server\n');
}); //reponse du serveur basique lors d'une connexion a la page 'HOME'('/')//

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
}); //le serveur ecoute le port 3000//

app.get('/rooms', (req, res) => {
	res.json(rooms);
}); // reponse du serveur lorsque le client arrive dans /rooms//

app.get('/rooms/:id', (req, res) => {
	const roomId = Number(req.params.id); //express extrait 
	//automatiquement l'id pour le mettre dans param//
	const room = rooms.find(r => r.id == roomId);

	if (!room){
		return res.status(404).json({ error: 'Room not found' });
	}

	res.json(room);
}); //reponse si url dynamique (id de la room different)//

app.post('/rooms', (req, res) => {
	const newRoom = {
		id: Date.now(),
		name: req.body.name || 'New Room',
		users: 0
	};

	rooms.push(newRoom);
	
	res.status(201).json(newRoom);
});//Une route POST creer/envoie des donnees contrairement a get qui se contente de lire//

app.put('/rooms/:id', (req, res) => {
	const roomId = Number(req.params.id);
	const room = rooms.find(r => r.id === roomId);

	if (!room) {
		return res.status(404).json({ error: 'Room not found' });
	}

	if (req.body.name !== undefined) {
		room.name = req.body.name;
	}

	if (req.body.users !== undefined) {
		room.users = req.body.users;
	}

	res.json(room);
});// Une route pour changer les rooms existantes//

app.delete('/rooms/:id', (req, res) => {
	const roomId = Number(req.params.id);

	const index = rooms.findIndex(r => r.id === roomId);

	if(index === -1) {
		return res.status(404).json({ error: 'Room not found' });
	}
	//delete un element a la pos index//
	const deleted = rooms.splice(index, 1)[0];

	res.json({ message: 'Room deleted', room: deleted});
});
