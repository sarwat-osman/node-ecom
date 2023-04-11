const apiRouter = require('./modules');
const group = require('../utils/route_group');
const productController = require('../controllers/product.controller');

// const apiRouter = express.Router();

apiRouter.use('/api/v1/products', group((router) => {
    router.post('/', productController.index);
    router.post('/:id', productController.show);
    router.post('/create', productController.create);
    router.post('/udpate/:id', productController.update);
    router.post('/delete/:id', productController.delete);
}));

module.exports = apiRouter;