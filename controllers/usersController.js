const { Router } = require('express');
const usersService = require('../services/usersService');
const { COOKIE_NAME } = require('../config');
const router = Router();

router.get('/register', (req, res) => {
    res.render('register');

})

router.post('/register', async (req, res) => {
    const { username, password, confirmPassword} = req.body;
    if (password != confirmPassword) {
        return res.render('register', {error: 'Passwords missmatch!'} )
    }

    try {
        await usersService.register({ username, password});
        res.redirect('/user/login');
    } catch (err) {
        res.render('register', {error: err})
    }
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', async (req, res) => {
    const { username, password} = req.body;
    
    try {
        let token = await usersService.login({ username, password});
        res.cookie(COOKIE_NAME, token);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.render('login', {error: err.error})
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
})

module.exports = router;