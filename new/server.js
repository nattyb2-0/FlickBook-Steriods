const express = require('express');
const logger  = require('morgan');
const path    = require('path');

const app = express();

const PORT = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log('server is running on', PORT)
})

app.get('/', (req,res)=>{
  res.send('hello world')
})
