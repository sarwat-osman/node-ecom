const apiRouter = require('./modules');
const group = require('../utils/route_group');
const categoryController = require('../controllers/category.controller');

// const apiRouter = express.Router();

apiRouter.use('/api/v1/category', group((router) => {
    router.post('/', categoryController.index);
    router.post('/:id', categoryController.show);
    router.post('/create', categoryController.create);
    router.post('/udpate/:id', categoryController.update);
    router.post('/delete/:id', categoryController.delete);
}));

module.exports = apiRouter;