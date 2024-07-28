const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const catFacts = [
    { fact: "Cats are one of, if not the most, popular pet in the world." },
    { fact: "Cats have five toes on each front paw, but only four toes on each back paw." },
    { fact: "Cats can rotate their ears 180 degrees." },
    // Add more facts as needed
];

app.get('/api/items', (req, res) => {
    res.json(catFacts);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
