const { response } = require('express');
const { Library } = require('../models/bookmodel');

const bookcontroller = {};

bookcontroller.createBook = async (req, res, next) => {
    // console.log('inside cb', req.body);
    const body = req.body;
    // const { authors, title, thumbnail } = req.body
    // console.log(authors, title, thumbnail);

    try {
        const result = await Library.create(body);
        // console.log(body);
        res.locals.book = result;
       return next();
    }
    catch {

            console.log('cannnot create')
            return next(err);
        }
        }
bookcontroller.getAllBooks = async (req, res, next) => {
    try {
        const result = await Library.find({}, "thumbnail");
        console.log(result);
        res.locals.library = result;
        return next();
    }
    catch (err) {
        console.log('cannnot find all')
        return next(err);
    }

}

module.exports = bookcontroller;