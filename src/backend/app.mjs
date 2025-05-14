import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/db.mjs';
// import mediaRouter from "./routes/media-routes.mjs";
import consultationRouter from './routes/consultation-routes.mjs';
import AppError from './models/AppError.mjs';
import bookingRouter from './routes/booking-routes.mjs';

dotenv.config({ path: './config/config.env' });

connectDb();

const app = express();

app.use(express.json());

app.use('/api/v1/booking', bookingRouter);
app.use('/api/v1/consultation', consultationRouter);
// app.use("/api/v1/media", mediaRouter);

// app.all("*", (req, res, next) => {
//   next(
//     new AppError(
//       `Vi kan tyvärr inte hitta resursen som du söker ${req.originalUrl}`,
//       404
//     )
//   );
// });

export { app };
