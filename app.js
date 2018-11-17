var app = require('./config/server')


app.get('/', function(req, res) {
    res.render('index', {titulo:'Inicial'});
});

app.get('/publicacoes', function(req, res) {
    res.render('publicacoes', {titulo:'Publicações'});
});

app.get('/nova-publicacao', function(req, res) {
    res.render('nova-publicacao', {titulo:'Nova Publicação'});
});


app.listen(3000, function () {
    console.log('Servidor rodando...');
});
