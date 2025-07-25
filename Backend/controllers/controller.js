import { Course } from "../models/model.js";
import { v2 as cloudinary } from 'cloudinary';
export const createCourse = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;

    try {
        if (!title || !description || !price) {
            return res.status(400).json({ error: "all fields are required" })
        }

        const { image } = req.files

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const allowedFormat = ["image/png", "image/jpeg"]
        if (!allowedFormat.includes(image.mimetype)) {
            return res.status(400).json({ errors: "invalid File Format" });
        }


        //cloudinary
        const cloud_response = await cloudinary.uploader.upload(image.tempFilePath)
        if (!cloud_response || cloud_response.error) {
            return res.status(400).json({ errors: "error uploading file" })
        }

        const courseData = {
            title,
            description,
            price,
            image: {
                public_id: cloud_response.public_id,
                url: cloud_response.url
            }
        }
        const course = await Course.create(courseData);
        res.json({
            message: "course created successfully",
            course,
        })
    } catch (error) {
        res.status(500).json({ errors: "error in creating course" })
        console.log("error")
    }
}

export const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const { title, description, price, image } = req.body;
    try {
        const course = await Course.updateOne({
            _id: courseId
        }, {
            title,
            description,
            price,
            image: {
                public_id: image?.public_id,
                url: image?.url,
            }
        }
        )
        res.status(201).json({ message: "course updated Successfully" })
    } catch (error) {
        res.status(500).json({ errors: "Error in course Updation" })
        console.log("Error in Updating Course", Error)
    }
}

export const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await Course.findOneAndDelete({
            _id: courseId,
        })
        if (!course) {
            res.status(500).json({ errors: "course not found" })
        }
        res.status(200).json({ message: "course deleted successfully" });
    } catch (error) {
        res.status(500).json({ errors: "error while deleting course" });
        console.log("error in deleting course");
    }
}

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({})
        res.status(200).json({ courses })
    } catch (error) {
        res.status(500).json({ errors: "unable to fetch all courses" })
        console.log("error in fetching courses")
    }
}

export const courseDetails = async (req, res) => {
    try {
        const { courseId } = req.params;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: "Course not Found" })
        }
        res.status(200).json({ course });
    } catch (error) {
        res.status(500).json({ errors: "error Fetching Details" })
        console.log("error fetching data")
    }
}