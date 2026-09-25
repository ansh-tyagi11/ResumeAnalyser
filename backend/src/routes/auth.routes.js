import express from 'express';
import { signUp, login, logOut } from '../controllers/auth.controllers.js';

const authRoutes = express.Router();

authRoutes.post('/sign-up', signUp);
authRoutes.post('/login', login);
authRoutes.post('/logOut', logOut);

export default authRoutes;
