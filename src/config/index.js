module.exports = {
    port: 8080, //? Puerto de red donde se montara este servidor
    host: "localhost", //? Lugar donde esta hosteado este servidor
    sql: {
        server: "localhost", //? Lugar donde esta hosteado la base de datos
        database: "",  //? Nombre de la base de datos
        user: "sa", 
        password: "Tu Contraseña",
        options: {
            encrypt: false,
            enableArithAbort: true
        }
    }
}
