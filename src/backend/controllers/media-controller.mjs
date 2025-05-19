import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";
import MediaRepository from "../repositories/mediaRepository.mjs";

export const getAll = catchErrorAsync(async (req, res) => {
  const media = MediaRepository.getAll();
  res.status(200).json({ success: true, data: media });
});

export const add = catchErrorAsync(async (req, res) => {
  const media = MediaRepository.create(req.body);
  res.status(200).json({ success: true, data: media });
});

export const find = catchErrorAsync(async (req, res) => {
  const media = MediaRepository.find(req.params.name);
  res.status(200).json({ success: true, data: media });
});
