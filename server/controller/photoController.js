const uuid = require('uuid');
const path = require('path');
const { Photo } = require('../models/models');
const ApiError = require('../error/ApiError');

class PhotoController {
  async addPhoto(req, res, next) {
    try {
      const { img } = req.files;
      let { sectionId = 1 } = req.body;

      let url = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', url));

      const photo = await Photo.create({ url, sectionId });
      return res.status(200).json(photo);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const photos = await Photo.findAll();
      return res.json(photos);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getById(req, res, next) {
    const photoId = req.params.photoId;
    try {
      const photo = await Photo.findOne({ where: { id: photoId } });
      return res.json(photo);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res) {
    const id = req.params.photoId;

    Photo.destroy({
      where: { id },
    })
      .then(() => {
        res.status(200).json({ msg: 'Фото удалено' });
      })
      .catch((err) => {
        res.status(500).json({ msg: err });
      });
  }
}

module.exports = new PhotoController();
