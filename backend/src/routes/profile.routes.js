import express from "express";
import { userProfile, userProfileUpdate } from "../controllers/profile.controllers.js";

const profileRoutes = express.Router();

profileRoutes.get('/profile', userProfile);
profileRoutes.patch('/profile-update', userProfileUpdate);

export default profileRoutes;
