import { jwttoken } from "../utils/jwt.js";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
    const token = req.cookies?.token;
    console.log(token)

    if (!token) {
        return res.status(401).json({ error: 'Not authenticated' });
    }

    try {
        const decoded = jwttoken.verify(token);
        console.log(decoded.id)
        const user = await User.findById(decoded.id).select('_id');

        if (!user) {
            return res.status(401).json({ success: false, message: "User no longer exists. Please log in again." });
        }

        req.user = { id: user._id.toString() };
        next();
    } catch (error) {
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token. Please log in again.",
            });
        }
        next(error);
    }
};

export default authMiddleware;
