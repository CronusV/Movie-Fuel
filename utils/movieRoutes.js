const express = require('express');
const router = express.Router();
const logic = require('./movieUtil');

router.get('/discover', (req, res) => {
    const include = req.query.include;
    const exclude = req.query.exclude;
    const sortBy = req.query.sortBy;
    const page = req.query.page;
    logic.filteredSearchSimple(include,exclude,sortBy,page)
    .then((data) => {
        res.status(200);
        res.send(data)
    })
    .catch((err) => {
        res.status(400);
        res.send(err)
    })
});
router.get('/search/byID', (req, res) => {
    const id = req.query.id;
    logic.searchDataBaseByID(id)
    .then((data) => {
        res.status(200);
        res.send(data)
    })
    .catch((err) => {
        res.status(400);
        res.send(err)
    })
});
router.get('/images', (req,res) => {
    const id = req.query.id;
    getImagesByID(id)
    .then((data) => {
        res.status(200);
        res.send(data)
    })
    .catch((err) => {
        res.status(400);
        res.send(err)
    })
})

router.get('/search', (req, res) => {
    let lang = 'en-US';
    if(req.query.language){
        lang = req.query.language;
    }
    const page = req.query.page;
    const search = req.query.search;
    logic.searchDataBaseByQuery(search,lang,page)
    .then((data) => {
        res.status(200);
        res.send(data)
    })
    .catch((err) => {
        res.status(400);
        res.send(err)
    })
});

module.exports = router;