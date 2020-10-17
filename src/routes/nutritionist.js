const { Router } = require("express");

const router = Router();


// // const dbConnection = require('../database');

router.get('/nutriologos', async ( req, res ) => {

    
    // // const db = await dbConnection();
    // // const request = await db.request().query("SELECT * FROM NUTRIOLOGO");
    // // request.recordset

    return res.status(200).json({
        ok: true,
        nutriologos: "*Lista de Nutriologos*"
    })
});

module.exports = router;