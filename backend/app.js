const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const db = require('./db.json')
const products = db.products

app.use(bodyParser.json());
app.use(cors());

console.log(products)
app.get('/', (req, res) => {
    res.send(products);
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
