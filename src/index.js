import express from 'express';
import renderer from './client/helpers/renderer';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send(renderer());
});

app.listen(3000, () => {
    console.log(`App listening on port ${PORT}`)
})