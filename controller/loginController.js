const express  = require('express');
// const db = require('../database');

class LoginController {
    pool;
    express;
    req; res;
    constructor() {
        this.req = express.request;
        this.res = express.response;
    }
    // login(req, res) {
    //     db.query('SELECT * FROM usuarios WHERE ususario = ? AND password = ?',
    //         [req.body.usuario, req.body.password],
    //         function (err, result) {
    //             if (result.length > 0) {
    //                 res.send(result[0]);
    //                 this.setUser(result[0]);
    //             } else {
    //                 res.send({
    //                     error: true,
    //                     msg: 'Error por favor verifique sus datos'
    //                 })
    //             }
    //         })
    // }
    logaut() {

    }
    setUser(user) {
        localStorage.setItem("user_auth", true);
        localStorage.setItem("id_usuario", user.id);
        localStorage.setItem("id_personas", user.id_personas);
        localStorage.setItem("ususario", user.ususario);
    }
    test(){
        this.res.send('Hola mundo');
    }
}

const login = new LoginController;
module.exports = login