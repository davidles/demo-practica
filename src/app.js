const express = require('express');
const app = express();
const path = require('path');
const mainRoute = require('./routes/main');

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(express.static(path.join('public')));

const port = 3000;

app.listen(port,  () => console.log('SERVER UP '+ port));

app.use('/', mainRoute);
// app.use('/detalle-menu', mainRoute);


