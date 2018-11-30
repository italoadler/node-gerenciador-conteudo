var app = require('./config/server')

var rotaHome = require('./app/routes/home')(app);

var rotaPublicacoes = require('./app/routes/publicacoes')(app);

var rotaNovaPublicacao = require('./app/routes/nova-publicacao')(app);

app.listen(3000, function () {
    console.log('Servidor rodando...');
});
