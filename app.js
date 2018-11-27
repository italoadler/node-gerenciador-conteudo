var app = require('./config/server')

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaPublicacoes = require('./app/routes/publicacoes');
rotaPublicacoes(app);

var rotaNovaPublicacao = require('./app/routes/nova-publicacao');
rotaNovaPublicacao(app);

app.listen(3000, function () {
    console.log('Servidor rodando...');
});
