const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course", function (req, res) {
    res.json({
        message: "course endpoint"
    })
})

adminRouter.put("/course", function (req, res) {
    res.json({
        message: "course endpoint"
    })
})

adminRouter.get("/course/bulk", function (req, res) {
    res.json({
        message: "all course endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}