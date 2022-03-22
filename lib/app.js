const express = require('express');

const app = express();
const cors = require('cors');

// Built in middleware
app.use(cors());
app.use(express.json());

// App routes
app.use('/api/v1/characters', require('./controllers/characters'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
