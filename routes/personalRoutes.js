const { Router } = require('express');
const personalController = require('../controller/personalController');

class PersonalRoutes {
    router = Router();
    constructor(){
        this.routes();
    }
    routes(){
        this.router.get('/fecth-personal', personalController.index);
        this.router.post('/registar-persona', personalController.store);
        this.router.get('/registro-personas-recientes/:fecha', personalController.showNew);
        this.router.get('/editar-persona/:id', personalController.edit);
        this.router.post('/actualizar-persona', personalController.update);
        this.router.delete('/eliminar-persona/:id', personalController.delete)
    }
}
module.exports = new PersonalRoutes().router;
