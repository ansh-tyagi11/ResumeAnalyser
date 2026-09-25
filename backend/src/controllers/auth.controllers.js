import { signUpSchema, loginSchema } from "../validations/auth.validation.js";
import { formatValidationErrors } from "../utils/format.js";
import { createUser, authenticateUser } from "../services/auth.services.js";
import { jwttoken } from "../utils/jwt.js";
import { cookie } from "../utils/cookies.js";

export const signUp = async (req, res, next) => {
    try {
        const validationResult = signUpSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                error: 'Validation failed',
                details: formatValidationErrors(validationResult.error)
            });
        }

        const { name, email, password } = validationResult.data;

        const user = await createUser({ name, email, password });

        const token = jwttoken.sign({
            id: user._id,
            email: user.email,
        });

        cookie.set(res, 'token', token);

        return res.status(201).json({
            message: 'User Registered',
            user: {
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        if (error.message === 'User with this email is already exist') {
            return res.status(409).json({ error: 'Email already exists' });
        }
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const validateResult = loginSchema.safeParse(req.body);

        if (!validateResult.success) {
            return res.status(400).json({
                error: 'Validation Failed',
                details: formatValidationErrors(validateResult.error)
            });
        }

        const user = await authenticateUser(validateResult.data);

        const token = jwttoken.sign({
            id: user._id,
            name: user.name,
            email: user.email
        });

        cookie.set(res, 'token', token);

        return res.status(200).json({
            message: 'User login successfully',
            user: {
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        if (error.message === 'Invalid email or password') {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        return next(error);
    }
}

export const logOut = async (req, res,) => {
    cookie.clear(res, 'token');
    return res.status(200).json({ message: 'User signed out successfully' });
}