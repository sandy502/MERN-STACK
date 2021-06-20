const HttpError = require('../utilitiesblog/http-error');


const adminSignup = (req,res,next) =>{
    console.log(req.body);

    res.json({ 'message': 'admin signed up'});
}

const adminLogin = (req,res,next) =>{
    console.log(req.body);

    res.status(200).json({ 'message': 'admin logged in'});
}



exports.adminSignup = adminSignup;
exports.adminLogin = adminLogin;
// exports.adminInfo = adminGetInfo;