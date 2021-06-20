const express = require('express');
const adminControllers = require('../controllersblog/admincont');

const router = express.Router();


router.post("/signup" , adminControllers.adminSignup);
router.post("/login" , adminControllers.adminLogin);
// router.get("/getUser", userControllers.userInfo);
// router.post("/postBlog", userControllers.userPosts);
// router.get("/getBlog" , userControllers.userGetBlog);


module.exports = router;