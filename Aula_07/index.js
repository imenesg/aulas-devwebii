const express = require('express')
const app = express()
const port = 8080
const fs = require('fs');

app.get('/tasks', (req, res) => {
  res.send("todas tasks")
})

app.get('/tasks/:id', (req, res) => {
    res.send(`Task ${req.params.id}` )
})

app.put('/tasks', (req, res) => {
    res.send('todas tasks')
})



console.log(`Server Ativo na porta ${port}`);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})