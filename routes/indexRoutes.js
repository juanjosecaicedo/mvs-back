const {Router} = require('express');
const IndexController = require('../controller/indexController');
class IndexRoutes {
    router = Router();
    constructor(){
        this.routes();
    }
    routes(){
        this.router.get('/', IndexController.index);
    }
}

module.exports = new IndexRoutes().router;