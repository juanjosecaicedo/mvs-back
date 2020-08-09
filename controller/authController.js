const db = require('../database');
class AuthController {
  constructor() {}
  login(req, res) {
    db.query("SELECT p.id AS id_persona, u.id, p.nombre, u.usuario, u.rol FROM (usuarios u JOIN personas p ON (u.id_persona = p.id)) WHERE usuario = ? AND password = ?",
      [req.body.usuario, req.body.password],
      function (err, result) {
        if (result.length > 0) {
          res.json(result[0]);
        } else {
          res.json({
            error: 'Error por favor verifique sus datos'
          });
        }
      })
  }
  signIn() {

  }
}
module.exports = new AuthController();