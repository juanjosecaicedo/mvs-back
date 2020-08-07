const {Router} = require('express');
const EventosController = require('../controller/eventosController');

class EventosRoutes {
  router = Router();
  constructor(){
    this.routes();
  }
  routes(){
    this.router.post('/eventos', EventosController.store);
  }
}
module.exports = new EventosRoutes().router;