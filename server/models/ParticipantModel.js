import { model, Schema } from "mongoose";

const ParticipantSchema = new Schema({
  game: {
    type: Schema.Types.ObjectId,
    ref: "h4b-cards",
    required: [true, "Game Id is required"]
  },

  participant: {
    type: Schema.Types.ObjectId,
    ref: "h4b-user",
    required: [true, "User Id is required"]
  }
});

ParticipantSchema.index({ game: 1, participant: 1 }, { unique: true });

const ParticipantModel = model(ParticipantSchema, "h4b-participants");

export default ParticipantModel;