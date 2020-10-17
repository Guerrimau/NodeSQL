
require('dotenv').config();

const { SQL_PASSWORD } = process.env;

module.exports = {
    port: 8080, //? Puerto de red donde se montara este servidor
    host: "localhost", //? Lugar donde esta hosteado este servidor
    sql: {
        server: "localhost", //? Lugar donde esta hosteado la base de datos
        database: "",  //? Nombre de la base de datos
        user: "sa", 
        password: SQL_PASSWORD,
        options: {
            encrypt: false,
            enableArithAbort: true
        }
    }
}

//  // PORT,
//     // HOST,
//     // SQL_SERVER,
//     // SQL_DATABASE,
//     // SQL_USER,