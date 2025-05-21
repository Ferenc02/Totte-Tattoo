import express from "express";
import { getAllMedia, addMedia, findMedia, mediaDelete } from '../controllers/media-controller.mjs'
import { upload } from "../utilities/storage.mjs";

const mediaRouter = express.Router();

mediaRouter.route("/")
  .get(getAllMedia)
  .post(upload.array('file'), addMedia);

mediaRouter.route("/:name")
  .get(findMedia)
  .delete(mediaDelete)

export default mediaRouter;
