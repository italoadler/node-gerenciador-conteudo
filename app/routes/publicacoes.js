module.exports = function(app) {
    app.get('/publicacoes', function(req, res) {
        res.render('publicacoes/publicacoes', {titulo:'Publicações'});
    });
}
