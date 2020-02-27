const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const products = require('./db.json')

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log(products)
    res.send(products);
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
