import Media from "../models/Media.mjs";

export default class MediaRepository {
  async getAll() {
    return await Media.find();
  }

  async create(data) {
    return await Media.create(data);
  }

  async update(id, media) {
    return await Media.findByIdAndUpdate(id, media, { new: true });
  }
}
