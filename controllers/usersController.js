const { Router } = require('express');

const router = Router();

router.get('/register', (req, res) => {
    res.render('register');

})

router.post('/register', (req, res) => {
    let { username, password} = req.body;
    res.redirect('/');
})

module.exports = router;