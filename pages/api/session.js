import { withIronSessionApiRoute } from 'iron-session';

const sessionHandler = (req, res) => {
    // Your session handling logic here
};

export default withIronSessionApiRoute(sessionHandler, {
    cookieName: 'session',
    password: 'complex_password_at_least_32_characters_long', // Replace with your actual password
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // set to true in production
    },
});
