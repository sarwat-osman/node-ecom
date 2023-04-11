const express = require('express');

const router = express.Router();

/**
 * Middleware for Loading & Error
 */
router.use((err, req, res, next) => {
    console.log('Loading...');
    if (!err) 
        return next();

    console.error(err.stack)
    res.status(500)
       .send('Internal Server Error!');
});

/** 
 * SAMPLE WEB ROUTE
 */
// router.get("/", (req, res) => {
//     try {        
//         res.render('home', {
//             title: 'Landing Page'
//         });
//     } catch (e) {
//         res.render('errors.500'{
//             title: 'Internal Server Error'
//         });
//     }
// });

/**
 * SAMPLE API ROUTE
 */
router.get("/api/v1/", (req, res) => {
    try {
        // res.send('OK');
        res.json({ 
            status: "success",
            message: "REST API",
            version: "1",
            author: "Sarwat Osman"
        });
    } catch (e) {
        res.status(500).send(e.toString());
    }    
});

module.exports = router;