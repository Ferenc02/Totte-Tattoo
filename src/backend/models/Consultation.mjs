import mongoose from 'mongoose';

const ConsultationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Ett förnamn är nödvändigt för konsultation.'],
  },
  lastName: {
    type: String,
    required: [true, 'Ett efternamn är nödvändigt för konsultation.'],
  },
  email: {
    type: String,
    required: [true, 'En emailadress är nödvändigt för konsultation.'],
  },
  number: {
    type: String,
    required: [true, 'Ett telefonnummer är nödvändigt för konsultation.'],
  },
  message: {
    type: String,
  },
  Images: {
    type: [String],
  },
});

export default mongoose.model('Consultation', ConsultationSchema);
