const jwt = require('jsonwebtoken');
const { SECRET, COOKIE_NAME } = require('../config');

module.exports = function() {
    
    return (req, res, next) => {

        let token = req.cookies[COOKIE_NAME];

        if (token) {

            jwt.verify(token, SECRET, (err, decoded) => {

                if (err) {
                    res.clearCookie(COOKIE_NAME).status(401).render('login', { error: 'No authentication!'});
                }

                req.user = decoded;
                res.locals.user = decoded,
                res.locals.isAuth = true;
            })
        }
        
        next()
    }
}