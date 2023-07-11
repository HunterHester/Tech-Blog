const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
//     res.render('home');
// });

app.use(require('./controller/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static('public'));

app.listen(PORT, () => {
    console.log (`Listening at http://localhost:${PORT}`)
});