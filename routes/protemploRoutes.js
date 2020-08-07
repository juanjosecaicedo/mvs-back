const {Router} = require('express');
const protemploController = require('../controller/protemploController');

class ProtemploRoutes {
    router = Router();
    constructor(){
        this.routes();
    }
    routes(){
        this.router.get('/personas-select-protemplo/:fecha', protemploController.showPersonas);
        this.router.post('/registrar-protemplo', protemploController.store);
        this.router.get('/protemplo', protemploController.index);
        this.router.get('/editar-protemplo/:id', protemploController.edit);
        this.router.post('/actualizar-protemplo', protemploController.update);
        this.router.delete('/eliminar-protemplo/:id', protemploController.delete);
    }
}
module.exports = new ProtemploRoutes().router;

