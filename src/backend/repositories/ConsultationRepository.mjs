import Consultation from '../models/Consultation.mjs';

export default class ConsultationRepository {
  async getAll() {
    return await Consultation.find();
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
