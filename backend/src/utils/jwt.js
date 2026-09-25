import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1d';

export const jwttoken = {
    sign: payload => {
        try {
            return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
        } catch (error) {
            console.error('ACTUAL JWT ERROR:', error);
            throw new Error('Failed to authenticate token', { cause: error });
        }
    },
    verify: token => {
        try {
            return jwt.verify(token, JWT_SECRET);

        } catch (error) {
            throw new Error('Failed to authenticate token', { cause: error });
        }
    }
}
