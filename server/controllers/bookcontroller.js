const { response } = require('express');
const { Library } = require('../models/bookmodel');

const bookcontroller = {};

bookcontroller.createBook = async (req, res, next) => {
    // console.log('inside cb', req.body);
    let { authors, title, thumbnail } = req.body
    // console.log(authors, title, thumbnail);
    //change http thumbnail to https thumbnail
    thumbnail = thumbnail.slice(0, 4) + 's' + thumbnail.slice(4)
    try {
        const result = await Library.create({ authors, title, thumbnail });
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
        res.locals.library = result;
        return next();
    }
    catch (err) {
        console.log('cannnot find all')
        return next(err);
    }
}
bookcontroller.deleteBook = async (req, res, next) => {
    console.log(req.body)
    const thumbnail = req.body.thumbnail;
    console.log(thumbnail);
    try {
        const result = await Library.deleteOne({ thumbnail })
        res.locals.book = result;
        console.log(result);
        next();
    }
    catch (err) {
        console.log('cannnot find all')
        return next(err);
    }
}

module.exports = bookcontroller;