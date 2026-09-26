export const cookie = {
    getOption: () => ({
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: true,
        path: '/',
        maxAge: 24 * 60 * 60 * 1000
    }),
    set: (res, name, value, options = {}) => {
        res.cookie(name, value, { ...cookie.getOption(), ...options });
    },
    clear: (res, name, options = {}) => {
        res.clearCookie(name, { ...cookie.getOption(), ...options });
    },
    get: (res, name) => {
        res.cookie[name];
    }
}
