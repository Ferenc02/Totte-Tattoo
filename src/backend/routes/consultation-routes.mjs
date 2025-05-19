import express from 'express';
import {
  getAllConsultations,
  findConsultation,
  addConsultation,
  deleteConsultation,
  updateConsultation,
  clearConsultations,
} from '../controllers/consultation-controller.mjs';

const consultationRouter = express.Router();

consultationRouter
  .route('/')
  .get(getAllConsultations)
  .post(addConsultation)
  .delete(clearConsultations);

consultationRouter
  .route('/:id')
  .get(findConsultation)
  .delete(deleteConsultation)
  .put(updateConsultation)
  .patch(updateConsultation);

export default consultationRouter;
