var express = require('express');
var router = express.Router();

// home page
router.get('/', function(req, res, next) {

    var db = req.con;
    var data = "";

    var user = "";
    var user = req.query.user;

    var filter = "";
    if (user) {
        filter = 'WHERE date = ?';
    }

    db.query('SELECT * FROM account ' + filter, user, function(err, rows) {
        if (err) {
            console.log(err);
        }
        var data = rows;

        // use index.ejs
        res.render('index', { title: 'Account Information', data: data, user: user });
    });

});

// add page
router.get('/add', function(req, res, next) {

    // use userAdd.ejs
    res.render('userAdd', { title: 'Add User', msg: '' });
});

// add post
router.post('/userAdd', function(req, res, next) {

    var db = req.con;

    // check date exist
    var date = req.body.date;
    var qur = db.query('SELECT date FROM account WHERE date = ?', date, function(err, rows) {
        if (err) {
            console.log(err);
        }

        var count = rows.length;
        if (count > 0) {

            var msg = 'Date already exists.';
            res.render('userAdd', { title: 'Add User', msg: msg });

        } else {

            var sql = {
                date: req.body.date,
                USDtoTW: req.body.USDtoTW,
                CNYtoTW: req.body.CNYtoTW,
                EURtoUSD: req.body.EURtoUSD,
                USDtoJPY: req.body.USDtoJPY,
                GBPtoUSD: req.body.GBPtoUSD,
                AUDtoUSD: req.body.AUDtoUSD,
                USDtoHKD: req.body.USDtoHKD,
                USDtoCNY: req.body.USDtoCNY,
                USDtoZAR: req.body.USDtoZAR,
                NZDtoUSD: req.body.NZDtoUSD
            };

            //console.log(sql);
            var qur = db.query('INSERT INTO account SET ?', sql, function(err, rows) {
                if (err) {
                    console.log(err);
                }
                res.setHeader('Content-Type', 'application/json');
                res.redirect('/');
            });
        }
    });


});

// edit page
router.get('/userEdit', function(req, res, next) {

    var id = req.query.id;
    //console.log(id);

    var db = req.con;
    var data = "";

    db.query('SELECT * FROM account WHERE id = ?', id, function(err, rows) {
        if (err) {
            console.log(err);
        }

        var data = rows;
        res.render('userEdit', { title: 'Edit Account', data: data });
    });

});


router.post('/userEdit', function(req, res, next) {

    var db = req.con;

    var id = req.body.id;

    var sql = {
        date: req.body.date,
        USDtoTW: req.body.USDtoTW,
        CNYtoTW: req.body.CNYtoTW,
        EURtoUSD: req.body.EURtoUSD,
        USDtoJPY: req.body.USDtoJPY,
        GBPtoUSD: req.body.GBPtoUSD,
        AUDtoUSD: req.body.AUDtoUSD,
        USDtoHKD: req.body.USDtoHKD,
        USDtoCNY: req.body.USDtoCNY,
        USDtoZAR: req.body.USDtoZAR,
        NZDtoUSD: req.body.NZDtoUSD
    };

    var qur = db.query('UPDATE account SET ? WHERE id = ?', [sql, id], function(err, rows) {
        if (err) {
            console.log(err);
        }

        res.setHeader('Content-Type', 'application/json');
        res.redirect('/');
    });

});


router.get('/userDelete', function(req, res, next) {

    var id = req.query.id;

    var db = req.con;

    var qur = db.query('DELETE FROM account WHERE id = ?', id, function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
});

module.exports = router;
