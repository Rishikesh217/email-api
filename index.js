import express from 'express';
const app = express();

app.get('/', (req ,res) => {
    res.send({
        hi: 'There',
    })
});

app.listen(5000);