const port = 3030;
const SERVER_VERSION = '31 aug 2022'

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://159.253.23.81:27017/reblog');

const app = express();

app.get("/status", (req, res) => {
    res.send(`status: ok, updated: ${SERVER_VERSION}`)
  })

app.listen(port, () => {
  console.warn('server on port:', port)
})