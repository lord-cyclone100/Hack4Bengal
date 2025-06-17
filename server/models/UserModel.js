import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Username not provided"],
    unique: true
  },
  
  email: {
    type: String,
    required: [true, "Email not provided"],
    unique: true
  },
  
  walletId: {
    type: String,
    required: [true, "Wallet Id must be given"],
    unique: true
  },

  password: {
    type: String,
  }
});

const UserModel = model("h4b-user", UserSchema);

export default UserModel;