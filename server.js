const express = require('express');
const path = require('path')
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require('./routes');
const db = require('./db')

// Static Routes
app.use('/vendor', express.static(path.join(__dirname, '/node_modules/')))
app.use('/dist', express.static(path.join(__dirname, '/dist/')))

// Global use
app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Client render
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

// Api
app.use('/api', apiRoutes);


// Start listening
let port = process.env.PORT || 3000
app.listen(port, () => console.log(`express server listening on port ${port}`));


// Create the DB connection
db.seed()
  .then(()=>{
    console.log(`db seeded`);
    return db.seed();
  });