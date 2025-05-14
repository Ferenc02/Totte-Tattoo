import express from 'express';
import {
  getAllConsultations,
  addConsultation,
} from '../controllers/consultation-controller.mjs';

const consultationRouter = express.Router();

consultationRouter.route('/').get(getAllConsultations).post(addConsultation);

// consultationRouter.get('/:id').put(update);

export default consultationRouter;
