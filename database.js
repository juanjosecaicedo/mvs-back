const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mision_vida',
  password: '',
  port: 3306
});

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            // eslint-disable-next-line no-console
            console.error(' la coneccion con la base de datos fue cerrada')
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            // eslint-disable-next-line no-console
            console.error(' DATABASE HAS TO MANY CONNECTION');
        }
        if(err.code === 'ECONNREFUSED'){
            // eslint-disable-next-line no-console
            console.error(' LA CONECCION FUE RECHAZADA');
        }
        if(connection) connection.release();
        // eslint-disable-next-line no-console
        console.log(' BASE DE DATOS CONECTADA');
        return;
    }
});

pool.query = promisify(pool.query);

module.exports = pool;
