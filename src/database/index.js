// // "use strict";

// // const sql = require("mssql");
// // const config = require("../config");

// // const dbConnection = async () => {
    
// //     let pool = null;

// //     const closePool = async () => {
// //         try {
// //             await pool.close();
// //             pool = null;
// //         } catch ( err ) {
// //             pool = null;
// //             console.log( err );
// //         }
// //     }

// //     const getConnection = async () => {
// //         try {
// //             if( pool ) {
// //                 return pool;
// //             } 
// //             pool = await sql.connect( config.sql );
// //             pool.on("error", async err => {
// //                 console.log(err);
// //                 await closePool();
// //             });
// //             return pool; 
// //         } catch ( err ){
// //             console.log( err );
// //             pool=null;
// //         }
// //     }

// //     return getConnection();
// // }

// // module.exports = dbConnection;