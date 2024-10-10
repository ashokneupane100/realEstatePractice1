import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, "User not found"));
      }
  
      const validPassword = await bcryptjs.compare(password, validUser.password);
  
      if (!validPassword) {
        return next(errorHandler(401, "Invalid credentials"));
      }
  
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
  
      // Destructure password out of validUser
      const { password: pass, ...rest } = validUser._doc;
  
      // Use status 200 for a successful login
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200) // Changed from 201 to 200
        .json({ message: "Login success", user: rest }); // Send rest of the user data without password
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  

  export const google = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = user._doc;
        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          username:
            req.body.email.split('@')[0],
          email: req.body.email,
          password: hashedPassword,
          avatar: req.body.photo,
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = newUser._doc;
        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
  };