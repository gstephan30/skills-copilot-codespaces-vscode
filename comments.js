// Create web server for comments
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set port
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set public folder
app.use(express.static('public'));

// Set router
app.use('/', require('./routes/index'));
app.use('/api/comments', require('./routes/comments'));

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));

