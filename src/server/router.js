import express from "express"
var router = express.Router();

//api specific routes
router.get('/', function(req, res) {
    res.send('Welcome to our foundation!');
});

router.get('/about', function(req, res) {
    res.json([
        { name: "isha foundation",
        mission: 'Education for all' }

    ]);
});

export default router