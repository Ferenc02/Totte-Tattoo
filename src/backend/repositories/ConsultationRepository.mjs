import Consultation from '../models/Consultation.mjs';
import AppError from '../models/AppError.mjs';

export default class ConsultationRepository {
  async getAll() {
    const consultations = await Consultation.find();
    return consultations;
  }

  async find(id) {
    const consultation = await Consultation.findById(id);

    if (!consultation) {
      throw new AppError(`Vi kan inte hitta konsultation med id: ${id}`, 404);
    }

    return consultation;
  }

  async add(consultation) {
    const { firstName, lastName, email, number, message } = consultation;
    console.log('CONSULTATION: ', firstName, lastName, email);

    const result = await Consultation.create({
      firstName,
      lastName,
      email,
      number,
      message,
    });
    return result;
  }
}
