const apiRouter = require('./modules');
const group = require('../utils/route_group');
const productController = require('../controllers/product.controller');

// const apiRouter = express.Router();

apiRouter.use('/api/v1/products', group((router) => {
    router.get('/', productController.index);
    router.get('/:id', productController.show);
    router.post('/create', productController.create);
    router.put('/udpate/:id', productController.update);
    router.delete('/delete/:id', productController.delete);
}));

module.exports = apiRouter;