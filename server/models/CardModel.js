import { model, Schema } from "mongoose";

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },

  description: {
    type: String,
    required: [true, "Description is required"]
  },
  
  hostName: {
    type: Schema.Types.ObjectId,
    ref: "h4b-user",
    required: [true, "Hostname is required"]
  },

  pictureUrl: {
    type: String,
  },

  startdate: {
    type: Date,
    required: [true, "Startdate is required"]
  },

  deadline: {
    type: Date,
    required: [true, "Deadline is required"]
  },

  isLive: {
    type: Boolean,
    required: [true, "Live status is required"]
  },

  prizeMoney: {
    type: String,
    required: [true, "Prize money is required"]
  }
});

const CardModel = model("h4b-cards", CardSchema);

export default CardModel;