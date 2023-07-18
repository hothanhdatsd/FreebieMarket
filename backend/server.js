import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import xlsx from "xlsx";
import { existsSync } from "fs";
import Product from "./models/productModel.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import uploadRoutes from "./routes/uploadRoutes.js";
import User from "./models/userModel.js";
import { profile } from "console";
dotenv.config();

connectDB();
let userProfile;
const app = express();
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

//login with google and facebook
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const userExists = await User.findOne({
        email: profile._json.email,
      });
      if (!userExists) {
        await User.create({
          name: profile.name.givenName,
          email: profile._json.email,
          provide: "google",
        });
      }
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_APP_ID,
      clientSecret: process.env.FB_SECRET_ID,
      callbackURL: process.env.FB_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      //Check whether the User exists or not using profile.id
      const userExists = await User.findOne({
        idFacebook: profile.id,
      });
      if (!userExists) {
        await User.create({
          name: profile.displayName,
          provide: profile.provider,
          idFacebook: profile.id,
        });
      }
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user data from session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const __dirname = path.resolve();
const fileName = __dirname + "/backend/excel.xlsx";

app.get("/", (req, res) => {
  res.send("API is on running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/auth", authRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is on running in ${process.env.NODE_ENV} on port ${PORT}`.yellow
      .bold
  )
);
