import express from "express";
import { getAllMedia, addMedia, findMedia } from '../controllers/media-controller.mjs'
import { upload } from "../utilities/storage.mjs";

const mediaRouter = express.Router();

mediaRouter.route("/")
  .get(getAllMedia)
  .post(upload.array('file'), addMedia);

mediaRouter.route("/:name")
  .get(findMedia);

export default mediaRouter;
