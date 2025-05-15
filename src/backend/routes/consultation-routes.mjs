import express from 'express';
import {
  getAllConsultations,
  findConsultation,
  addConsultation,
} from '../controllers/consultation-controller.mjs';

const consultationRouter = express.Router();

consultationRouter.route('/').get(getAllConsultations).post(addConsultation);

consultationRouter.route('/:id').get(findConsultation);

export default consultationRouter;
