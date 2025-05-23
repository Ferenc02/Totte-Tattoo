import Media from "../models/Media.mjs";
import AppError from "../models/AppError.mjs";

export default class MediaRepository {
  async getAll() {
    return await Media.find();
  }

  async create(data) {
    return await Media.create(data);
  }

  async find(name) {
    const media = await Media.findByName(name);

		if (!media) {
			throw new AppError(`Vi kan inte hitta filen med namnet: ${name}`, 404);
		}
		return media;
  }
}
