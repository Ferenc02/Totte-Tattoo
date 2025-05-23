import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: [true, "Filnamn måste anges"],
  },
  filePath: {
    type: String,
    required: [true, "Filsökväg måste anges"],
  },
  fileType: {
    type: String,
    required: [true, "Filtyp måste anges"],
  },
}, {
  timestamps: true
});

export default mongoose.model("Media", mediaSchema);
