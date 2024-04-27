import {Router} from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createContact, getAllContact } from "../controllers/contactControllers.js";


const router = Router();
// contact Routes
router.post("/create-contact",  createContact);
// Admin Routes
router.get("/contact-data",userAuth,  getAllContact);




export default router;
