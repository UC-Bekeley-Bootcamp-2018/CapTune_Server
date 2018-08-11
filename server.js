var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'root',
    password: 'root',
    database:'captune'
});


connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    main();
});

const main = () => {
    connection.query('select * from accounts', function(err, res) {
        console.log(res);
    })

    process.on( 'SIGINT', function() {
        console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
        connection.end();
        process.exit();
    })
}