const UserModel = require('../models/user');

module.exports = {
    profile
};

function profile(req, res) {
    res.render('profile');
}
//need to go to db to find all book registered by the logged in user(req.user)
