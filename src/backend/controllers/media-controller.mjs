import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";
import MediaRepository from "../repositories/MediaRepository.mjs";

export const getAllMedia = catchErrorAsync(async (req, res) => {
  const media = await new MediaRepository().getAll();
  res.status(200).json({ success: true, data: media });
});

export const addMedia = catchErrorAsync(async (req, res) => {
  const mediaFiles = req.files.map(file => ({
    fileName: file.filename,
    filePath: file.path,
    fileType: file.mimetype
  }));

  const savedMedia = await new MediaRepository().create(mediaFiles);
  res.status(201).json({ success: true, data: savedMedia });
});

export const findMedia = catchErrorAsync(async (req, res) => {
  const media = await new MediaRepository().find(req.params.name);
  res.status(200).json({ success: true, data: media });
});
