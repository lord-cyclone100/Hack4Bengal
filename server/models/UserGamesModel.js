import { model, Schema } from "mongoose";

const UserGamesSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "h4b-user",
    required: [true, "User is required"]
  },

  gameNo: {
    type: Schema.Types.ObjectId,
    ref: "h4b-games",
    required: [true, "Games you play is required"],
  },

  userGameID: {
    type: String,
    required: [true, "Game Id for games you play is required"]
  }
});

UserGamesSchema.index({ author: 1, gameNo: 1 }, { unique: true });

const UserGameModel = model("h4b-usergames", UserGamesSchema);

export default UserGameModel;