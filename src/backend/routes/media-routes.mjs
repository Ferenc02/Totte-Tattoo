import express from "express";
import {getAll, add, find} from '../controllers/media-controller.mjs'
import { upload } from "../utilities/storage.mjs";

const mediaRouter = express.Router();

mediaRouter.route("/").get(getAll).post(upload.array('file'), add);

mediaRouter.route("/:name").get(find);

export default mediaRouter;
