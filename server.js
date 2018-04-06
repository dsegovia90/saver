const express = require('express');
const app = express();
const port = 8080;

app.get('/api/customers', (req, res) => {
  customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];
  res.json(customers)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
