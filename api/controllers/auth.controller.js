import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists (duplicate email or username)
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username or email is already taken, you better go and login",
      });
    }

    // Hash the password and create a new user
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();

    return res.status(201).json({ message: "User has been created", user });
  } catch (error) {
    // Pass error to error handling middleware
    next(error);
  }
};
