import { appErrorAsync } from "../utilities/appErrorAsync.mjs";
import MediaRepository from "../repositories/mediaRepository.mjs";

export const getAll = appErrorAsync(async (req, res) => {
  const media = MediaRepository.getAll();
  res.status(200).json({ success: true, data: media });
});

export const add = appErrorAsync(async (req, res) => {
  const media = MediaRepository.create(req.body);
  res.status(201).json({ success: true, data: media });
});

export const update = appErrorAsync(async (req, res) => {
  const media = MediaRepository.getAll(req.params.id, req.body);
  res.status(204).json({ success: true, data: media });
});
