import express from 'express';
import {
  getAllConsultations,
  findConsultation,
  addConsultation,
  deleteConsultation,
  updateConsultation,
  clearConsultations,
} from '../controllers/consultation-controller.mjs';
import { upload } from '../utilities/storage.mjs';

const consultationRouter = express.Router();

consultationRouter
  .route('/')
  .get(getAllConsultations)
  .post(upload.array('file'), addConsultation)
  .delete(clearConsultations);

consultationRouter
  .route('/:id')
  .get(findConsultation)
  .delete(deleteConsultation)
  .put(updateConsultation)
  .patch(updateConsultation);

export default consultationRouter;
