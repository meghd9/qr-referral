const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.schema;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    referralCode: { type: String, unique: true, default: () => crypto.randomBytes(4).toString("hex") },
    referredBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
