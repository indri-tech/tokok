import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(async (req, res) => {
  req.session.destroy();
  res.json({ message: "Logout successful" });
}, {
  cookieName: "session",
  password: "complex_password_at_least_32_characters_long",
  cookieOptions: { secure: process.env.NODE_ENV === "production" },
});
