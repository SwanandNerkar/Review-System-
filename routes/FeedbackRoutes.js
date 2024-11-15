import { createAdmin, createAlumni, createStudent, getAllUsers } from "../controllers/userController.js";
import { createCompany, getAllCompanies } from "../controllers/companyController.js"
import { createReview, getAllReviews } from "../controllers/reviewsController.js";
import { likeReviews } from "../controllers/likesController.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";

const router = express.Router();

router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)
router.post("/admin/create",isAdmin,createAdmin)
router.get("/user/get",getAllUsers)

router.post("/company/create",isAdmin, createCompany)
router.get("/companies/get",getAllCompanies)

router.post("/review/create", createReview)
router.get("/review/get", getAllReviews)

router.post("/like/add", likeReviews)

export default router;