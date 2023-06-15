const { User } = require('../models/usermodel');

const userController = {};

userController.verifyUser = async (req, res, next) => {
    const userName = req.body.username;
    const userPassword = req.body.password;
    // console.log(userName, userPassword);
    try {
        const results = await User.find({});
        if (results[0].password == userPassword) return next();
        if (!results) {
            return res.redirect('/login');
        }
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = userController;