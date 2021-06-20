const express = require('express');

const userControllers = require('../controllersblog/usercont');
// const checkAuth = require('../middlewares/check-auth');

const router = express.Router();


router.post("/signup" , userControllers.userSignup);
router.post("/login" , userControllers.userLogin);
router.get("/getUser", userControllers.userInfo);
router.post("/postBlog", userControllers.userPosts);
router.get("/getBlog" , userControllers.userGetBlog);

// router.post("/signup" , userController.userSignup);
// router.post("/login" , userController.userLogin);
// // router.get("/userInfo" , userController.userInfo);
// router.use(checkAuth);


// router.get("/userInfo/:userName" , userController.userInfo);
// router.post("/createPost", userController.createPost);

module.exports = router;