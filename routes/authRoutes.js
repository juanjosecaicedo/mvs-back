const {Router} = require('express');
const authController = require('../controller/authController');
class AuthRoutes {
    router = Router();
    constructor(){
        this.routes();
    }
    routes(){
        this.router.post('/login', authController.login);
    }
}
module.exports = new AuthRoutes().router;
