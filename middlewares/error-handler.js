module.exports = function (err, req, res, next){
    if (err) {
        res.status(500).end({error: err});
        // res.status(500);
        // res.render('error', {error: err})
    }

    next;
}