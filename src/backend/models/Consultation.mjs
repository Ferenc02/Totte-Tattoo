import mongoose from "mongoose";

const ConsultationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Ett förnamn är nödvändigt för bokning."],
  },
  lastName: {
    type: String,
    required: [true, "Ett efternamn är nödvändigt för bokning."],
  },

  email: {
    type: String,
    required: [true, "En emailadress är nödvändigt för bokning."],
  },
  number: {
    type: String,
    required: [true, "Ett telefonnummer är nödvändigt för bokning."],
  },

  date: {
    type: String,
    required: [true, "Ett datum är nödvändigt för bokning."],
  },

  time: {
    type: String,
    required: [true, "En tid är nödvändigt för bokning."],
  },

  gdpr: {
    type: String,
    required: [true, "Att acceptera GDPR är nödvändigt för bokning."],
  },

  message: {
    type: String,
  },
});

export default mongoose.model("Consulation", BookingSchema);
