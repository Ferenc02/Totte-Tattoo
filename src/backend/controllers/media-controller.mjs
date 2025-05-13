import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";
import MediaRepository from "../repositories/mediaRepository.mjs";

// export const getAll = catchErrorAsync(async (req, res) => {
//   const media = MediaRepository.getAll();
//   res.status(200).json({ success: true, data: media });
// });

// export const add = catchErrorAsync(async (req, res) => {
//   const media = MediaRepository.create(req.body);
//   res.status(201).json({ success: true, data: media });
// });

// export const update = catchErrorAsync(async (req, res) => {
//   const media = MediaRepository.getAll(req.params.id, req.body);
//   res.status(204).json({ success: true, data: media });
// });
