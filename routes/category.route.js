const apiRouter = require('./modules');
const group = require('../utils/route_group');
const categoryController = require('../controllers/category.controller');

// const apiRouter = express.Router();

apiRouter.use('/api/v1/category', group((router) => {
    router.get('/', categoryController.index);
    router.get('/:id', categoryController.show);
    router.post('/create', categoryController.create);
    router.put('/udpate/:id', categoryController.update);
    router.delete('/delete/:id', categoryController.delete);
}));

module.exports = apiRouter;