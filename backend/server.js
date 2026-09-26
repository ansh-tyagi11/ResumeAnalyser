import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import connectDB from './src/config/database.js';
import authRoutes from './src/routes/auth.routes.js';

dotenv.config();

await connectDB();

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(cookieParser());

app.get('/health', (req, res) => {
    res
        .status(200)
        .json({
            status: 'OK',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        });
});

const rateLimitStore = new Map();

const rateLimiter = (limit, windowMs) => {
    return (req, res, next) => {
        const key = req.ip;
        const now = Date.now();

        let record = rateLimitStore.get(key);

        if (!record || now >= record.resetTime) {
            record = {
                count: 0,
                resetTime: now + windowMs,
            };

            rateLimitStore.set(key, record);
        }

        if (record.count >= limit) {
            const retryAfter = Math.ceil(
                (record.resetTime - now) / 1000
            );

            res.setHeader("X-RateLimit-Limit", limit);
            res.setHeader("X-RateLimit-Remaining", 0);
            res.setHeader("Retry-After", retryAfter);

            return res.status(429).json({
                error: "Too many requests",
                retryAfter,
            });
        }

        record.count++;

        const remaining = Math.max(
            0,
            limit - record.count
        );

        res.setHeader("X-RateLimit-Limit", limit);
        res.setHeader("X-RateLimit-Remaining", remaining);

        next();
    };
};

app.use('/api/auth', rateLimiter(5, 60 * 1000), authRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})