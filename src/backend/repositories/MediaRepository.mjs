import Media from "../models/Media.mjs";

export default class MediaRepository {
  async getAll() {
    return await Media.find();
  }

  async create(data) {
    return await Media.create(data);
  }

  async find(name) {
    
  }
}
