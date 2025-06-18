const express = require('express');
const Mongoose = require("mongoose");
const app = express();

const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);



async function main() {
    await Mongoose.connect("mongodb+srv://admin:Dhruvmongo@cluster0.qmq6rup.mongodb.net/eduportal")
    app.listen(3000)
    console.log("listening");
}

main();