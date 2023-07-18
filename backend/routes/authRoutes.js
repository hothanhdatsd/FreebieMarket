import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import passport from "passport";
import User from "../models/userModel.js";
const router = express.Router();
import generate from "../utils/generateToken.js";

//google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/successGG",
    failureRedirect: "http://localhost:3000/auth/fail",
  })
);
router.get("/successGG", async (req, res) => {
  console.log(req.user);
  const email = req.user.emails[0].value;
  const user = await User.findOne({
    email,
  });
  if (user && req.user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generate(user._id),
      provide: user.provide,
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});
router.get("/fail", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

//facebook
router.get("/facebook", passport.authenticate("facebook"));
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/successFB",
    failureRedirect: "http://localhost:3000/auth/fail",
  })
);
router.get("/successFB", async (req, res) => {
  console.log(req.user);
  const user = await User.findOne({
    idFacebook: req.user.id,
  });
  if (user || req.user) {
    res.json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
      token: generate(user._id),
      provide: user.provide,
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});
export default router;
