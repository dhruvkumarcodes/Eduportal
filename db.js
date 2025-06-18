const Mongoose = require("mongoose");

const { Schema, Types } = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String

});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorID: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    purchaseId: ObjectId
});

const userModel = Mongoose.model("user", userSchema);
const adminModel = Mongoose.model("admin", adminSchema);
const courseModel = Mongoose.model("course", courseSchema);
const purchaseModel = Mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}