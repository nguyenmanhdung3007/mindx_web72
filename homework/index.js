const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

app.use(express.json());

// Mock data
let products = [1, 2, 3];

// GET endpoint
app.get('/products', (req, res) => {
  console.log(req.query.apiKey);
  res.status(200).json( {data: products});
});

// POST endpoint
app.post('/products', (req, res) => {
  console.log(req.query);
  res.status(201).json({ message: 'Create success'});
});

// PUT endpoint
app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  console.log(`ID tuong ung khi truyen vao: ${id}`);
  console.log(req.params);
  res.status(200).json({ message: 'Update success'});
});

// DELETE endpoint
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  console.log(`ID tuong ung khi truyen vao: ${id}`);
  res.status(200).json({ message: 'Remove success'});
});


app.listen(3000, () => {
    console.log(`app is listening on http://localhost:${3000}`);
})