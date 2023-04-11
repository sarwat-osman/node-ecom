const router = require('./modules');

//Router Specific Middleware 
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});  

router.get('/', function(req, res) {
    res.send('Admin dashboard');
});

module.exports = router;
