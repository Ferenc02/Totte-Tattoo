import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: [true, "Tillverkare måste anges"],
  },
  filePath: {
    type: String,
    required: [true, "Model typ måste anges"],
  },
  fileType: {
    type: String,
    required: [true, "Model typ måste anges"],
  },
});

export default mongoose.model("Media", mediaSchema);
