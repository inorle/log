const { response } = require('express');
const { Library } = require('../models/bookmodel');

const bookcontroller = {};

bookcontroller.createBook = async (req, res, next) => {
    console.log('inside cb', req.body);
    const body = req.body;
    // const { authors, title, thumbnail } = req.body
    // console.log(authors, title, thumbnail);

    try {
        const result = await Library.create(body);
        console.log(body);
        res.locals.book = result;
       return next();
    }
    catch {
        (err, result) => {
            if (err) {
                console.log('cannnot create')
                return next(err);
            }
        }

    }
}

module.exports = bookcontroller;