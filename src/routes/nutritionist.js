const { Router } = require("express");

const router = Router();


// // const dbConnection = require('../database');

router.get('/comidas', async ( req, res ) => {

    
    // // const db = await dbConnection();
    // // const request = await db.request().query("SELECT * FROM NUTRIOLOGO");
    // // request.recordset

    return res.status(200).json({
        ok: true,
        comidas: "*Lista de Comidas*"
    })
});

module.exports = router;
