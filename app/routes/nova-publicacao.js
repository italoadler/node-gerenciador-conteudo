module.exports = function(app) {
    app.get('/nova-publicacao', function(req, res) {
        res.render('admin/nova-publicacao', {titulo:'Nova Publicação'});
    });
}
