const { Router } = require('express');
const userController = require('./controllers/usersController');

const router = Router();
router.use('/user', userController);

router.use('/', (req, res) => {
    res.render('home')
});
module.exports = router;