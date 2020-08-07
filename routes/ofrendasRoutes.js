const {Router} = require('express');
const ofrendasController = require('../controller/ofrendasController');

class OfrendasRoutes {
    router = Router();
    constructor(){
        this.routes();
    }
    routes(){
        this.router.get('/personas-select-ofrendas/:fecha', ofrendasController.showPersonas);
        this.router.post('/registrar-ofrendas', ofrendasController.store);
        this.router.get('/ofrendas', ofrendasController.index);
        this.router.get('/editar-ofrendas/:id', ofrendasController.edit);
        this.router.post('/actualizar-ofrendas', ofrendasController.update);
        this.router.delete('/eliminar-ofrendas/:id', ofrendasController.delete);
    }
}
module.exports = new OfrendasRoutes().router;

