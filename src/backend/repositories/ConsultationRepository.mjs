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
    const { firstName, lastName, email, number, message } = JSON.parse(consultation.body.consultation);
    console.log('CONSULTATION: ', firstName, lastName, email);

    const images = [...consultation.files].map(file => file.filename);

    const result = await Consultation.create({
      firstName,
      lastName,
      email,
      number,
      message,
      images,
    });
    return result;
  }

  async remove(id) {
    await Consultation.findByIdAndDelete(id);
  }

  async update(data, id) {
    await Consultation.findByIdAndUpdate(id, data, { new: true });
  }

  async clear() {
    await Consultation.deleteMany();
  }
}
