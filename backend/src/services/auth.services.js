import argon2 from 'argon2'
import User from '../models/user.model.js';

export const hashPassword = async (password) => {
    try {
        const hashedPassword = await argon2.hash(password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            timeCost: 3,
            parallelism: 1
        });
        return hashedPassword;
    } catch (error) {
        console.error('Actual Argon2 error:', error);
        throw new Error('Error hashing Password', { cause: error });
    }
}

export const createUser = async ({ name, email, password }) => {
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error('User with this email is already exist');
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        return user;
    } catch (error) {
        throw error;
    }
}

export const authenticateUser = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user || !(await argon2.verify(user.password, password))) {
        throw new Error('Invalid email or password');
    }

    return { name: user.name, email: user.email };
}
