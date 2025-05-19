import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";
import MediaRepository from "../repositories/MediaRepository.mjs";

export const getAll = catchErrorAsync(async (req, res) => {
  const media = await new MediaRepository().listAll();
  res.status(200).json({ success: true, data: media });
});

export const add = catchErrorAsync(async (req, res) => {
  const media = await new MediaRepository().add(req.body);
  res.status(201).json({ success: true, data: media });
});

export const find = catchErrorAsync(async (req, res) => {
  const media = await new MediaRepository().find(req.params.name);
  res.status(200).json({ success: true, data: media });
});

export const remove = catchErrorAsync(async (req, res) => {
  await new MediaRepository().delete(req.params.name);
  res.status(204).end();
});
