import { catchErrorAsync } from '../utilities/catchErrorAsync.mjs';
import ConsultationRepository from '../repositories/ConsultationRepository.mjs';

export const getAllConsultations = catchErrorAsync(async (req, res) => {
  const consultations = await new ConsultationRepository().getAll();
  res.status(200).json({ success: true, data: consultations });
});

export const findConsultation = catchErrorAsync(async (req, res) => {
  const consultation = await new ConsultationRepository().find(req.params.id);
  res.status(200).json({ success: true, data: consultation });
});

export const addConsultation = catchErrorAsync(async (req, res) => {
  const consultation = await new ConsultationRepository().add(req.body);
  res.status(201).json({ success: true, data: consultation });
});
