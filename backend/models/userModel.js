import mongoose from "mongoose";

import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      default: "",
      // required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    provide: {
      type: String,
      enum: ["local", "facebook", "google"],
      default: "local",
    },
    idFacebook: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const user = mongoose.model("User", userSchema);

export default user;
