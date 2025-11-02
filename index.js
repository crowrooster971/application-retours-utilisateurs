const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'application Retours Utilisateurs!');
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});