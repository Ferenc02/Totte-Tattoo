import Consultation from "./models/Consulation.mjs";

export default class ConsultationRepository {
  async getAll() {
    return await Consultation.find();
  }
}
