import Media from "../models/Media.mjs";

export default class MediaRepository {
  async getAll() {
    return await Media.find();
  }

  async create(data) {
    return await Media.create(data);
  }

  async find(name) {
    const media = await Media.findOne({ fileName: name });
    if (!media) {
      throw new AppError(`Vi kan inte hitta filen ${name}`, 404);
    }
    return media;
  }

  async delete(name) {
    const media = await Media.findOneAndDelete({ fileName: name });
    if (!media) {
      throw new AppError(`Vi kan inte hitta filen ${name}`, 404);
    }
    return media;
  }
}
