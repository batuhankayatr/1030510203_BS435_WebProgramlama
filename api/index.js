const express = require('express');
const Auth = require('./src/routes/register.js')
const Login = require('./src/routes/Login.js')
const Score = require('./src/routes/PostScore.js')
const mongoose = require ('mongoose');
const app = express();
const port = 3000;  
const cors = require('cors')
app.use(cors());
app.use(express.json());
const db = () => {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.veazu2b.mongodb.net').then(() => {
        console.log("Connected to the database!");
    }).catch((err) => {
        console.log("Cannot connect to the database!", err);
    })
}
db ();
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
app.use('/',Auth)
app.use('/',Login)
app.use('/',Score)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports=app