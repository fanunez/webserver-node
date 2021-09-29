
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function ( err ) {});

// Middleware, para servir contenido estatico
app.use( express.static('public'));


app.get( '/', (req, res) => {
    // segundo argumento de render son las opciones, todas las cosas que se quieren mandar como argumentos
    res.render('home', { 
        title: 'Web ejemplo'
    }); // renderizado de handlebars
});

app.get( '/generic', (req, res) => {
    res.render('generic', {
        title: 'Web ejemplo'
    });
});

app.get( '/elements', (req, res) => {
    res.render('elements', {
        title: 'Web ejemplo'
    });
});


// app.get( '/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get( '/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

// pagina comodin
// app.get( '*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html');
// });


app.listen( port, () => {
    console.log(`App listening at http://localhost:${ port }`);
});


