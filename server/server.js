const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

const items = require('./routes/api/Items');
const app = express();

app.use(cors())
//BodyParser Middleware
app.use(bodyParser.json());


//DB config 
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose.connect(db)
.then(()=> console.log('MongoDB connected...'))
.catch(err => console.log(err));

//use routes
app.use('/',items);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server Started on port ${port}`));

