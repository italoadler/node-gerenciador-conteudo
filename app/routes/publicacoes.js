module.exports = function(app) {
    app.get('/publicacoes', function(req, res) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db_gerenciador_conteudo'
        });
        
        connection.query('select * from publicacoes', function(error, result) {
            res.send(result);
        })
    });
}
