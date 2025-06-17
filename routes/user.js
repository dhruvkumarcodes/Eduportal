const { Router } = require("express");

const userRouter = Router();

userRouter.post('/signup', function (req, res) {

    res.json({
        message: "Successfully signed up"
    })
})

userRouter.post('/login', function (req, res) {

    res.json({
        message: "Successfull login"
    })
})

userRouter.get('/purchased', function (req, res) {

    res.json({
        message: "Purchased courses"
    })
})

module.exports = {
    userRouter: userRouter
}