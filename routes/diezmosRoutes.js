const {Router} = require('express');
const diezmosController = require('../controller/diezmosController');
class DiezmosRoutes {
    router = Router();
    constructor(){
        this.routes();
    }
    routes(){
        this.router.get('/personas-select-diezmos/:fecha', diezmosController.showPersonas);
        this.router.post('/registrar-diezmos', diezmosController.store);
        this.router.get('/diezmos', diezmosController.index);
        this.router.get('/editar-diezmo/:id', diezmosController.edit);
        this.router.post('/actualizar-diezmo', diezmosController.update);
        this.router.delete('/eliminar-diezmo/:id', diezmosController.delete);
    }
}
module.exports = new DiezmosRoutes().router;
