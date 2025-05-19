import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";
import MediaRepository from "../repositories/MediaRepository.mjs";

export const getAllMedia = catchErrorAsync(async (req, res) => {
  const media = await new MediaRepository().listAll();
  res.status(200).json({ success: true, data: media });
});

export const addMedia = catchErrorAsync(async (req, res) => {
  const media = await new MediaRepository().add(req.body);
  res.status(201).json({ success: true, data: media });
});

export const findMedia = catchErrorAsync(async (req, res) => {
  const media = await new MediaRepository().find(req.params.name);
  res.status(200).json({ success: true, data: media });
});