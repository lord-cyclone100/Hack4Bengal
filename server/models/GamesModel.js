import { model, Schema } from "mongoose";

const GamesSchema = new Schema({
  name: {
    type: String,
    required: [true, "Game name is required"],
    unique: true
  }
});

const GamesModel = model("h4b-games", GamesSchema);

export default GamesModel;