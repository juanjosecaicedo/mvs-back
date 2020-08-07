const db = require('../database');
class AuthController {
  constructor() {}
  login(req, res) {
    db.query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?',
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