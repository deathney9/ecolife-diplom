const Router = require('express');
const router = new Router();
const photoController = require('../controller/photoController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), photoController.addPhoto);
router.get('/', photoController.getAll);
router.get('/:photoId', photoController.getById);
router.delete('/:photoId', checkRole('ADMIN'), photoController.delete);

module.exports = router;
