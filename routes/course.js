const { Router } = require("express");


const courseRouter = Router();

courseRouter.get('/all', function (req, res) {

    res.json({
        message: "All Courses"
    })
})


courseRouter.post('/purchase', function (req, res) {

    res.json({
        message: "which course u want to puchase"
    })
})

module.exports = {
    courseRouter: courseRouter
}