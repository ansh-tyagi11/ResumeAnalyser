import express from 'express';
import { signUp, login, logOut, getSession } from '../controllers/auth.controllers.js';

const authRoutes = express.Router();

authRoutes.post('/sign-up', signUp);
authRoutes.post('/login', login);
authRoutes.post('/logOut', logOut);
authRoutes.get('/me', getSession);

export default authRoutes;
