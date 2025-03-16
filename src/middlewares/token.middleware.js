import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const SECRET_KEY = process.env.SECRET_TOKEN_KEY || "my-very-very-secret-key";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    try {
        if (token === SECRET_KEY) {
            next();
        } else {
            return res.status(403).json({ error: `Forbidden: Invalid or expired token:: ` });
        }
    } catch (error) {
        return res.status(403).json({ error: `Forbidden: Invalid or expired token:: ${error.message}` });
    }
};

export default verifyToken