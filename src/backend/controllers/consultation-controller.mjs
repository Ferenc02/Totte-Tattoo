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
  const consultation = await new ConsultationRepository().add(req);
  res.status(201).json({ success: true, data: consultation });
});

export const deleteConsultation = catchErrorAsync(async (req, res) => {
  await new ConsultationRepository().remove(req.params.id);
  res.status(204).end();
});

export const updateConsultation = catchErrorAsync(async (req, res) => {
  await new ConsultationRepository().update(req.body, req.params.id);
  res.status(204).end();
});

export const clearConsultations = catchErrorAsync(async (req, res) => {
  await new ConsultationRepository().clear();
  res.status(204).end();
});
