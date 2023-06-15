const path = require('path');
const express = require('express');
// const cors = require('cors')

//import database
const bookcontroller = require('./controllers/bookcontroller')
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');
// app.use(bodyParser);
// Access - Control - Allow - Origin: *;
// s
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/build', express.static(path.join(__dirname, "../build")))


// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://localhost:8080");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

  
// app.use(express.static(path.resolve(__dirname, '../build')));

app.post('/addBook', bookcontroller.createBook, (req, res) => {
    console.log('res.locals from server', res.locals.book);
    return res.status(200).send(res.locals.book);
});
app.get('/', (req, res) => {
    res.status(200).send('hello')
});


app.listen(port, () => console.log(`Listening on port ${port}`));
