const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('port', 5000);

app.listen(app.get('port'), () => console.log(`Server running on port : ${app.get('port')}`));