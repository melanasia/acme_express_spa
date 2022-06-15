const express = require('express');
const app = express();
const path = require('path');

const cheeses = [
        {
            id: 1,
            name: 'Brie',
            country: 'France',
            price: '4.00'
        },
        {
            id: 2,
            name: 'Cheddar',
            country: 'America',
            price: '1.00'
        },
    ];

app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.get('/api/cheeses', async (req,res) => {
    res.status(200).send(cheeses);
})

const port = process.env.PORT || 1337;

app.listen(port, ()=> console.log(`app listening on port ${port}`));