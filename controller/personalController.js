const db = require('../database');
class PersonalController {
  constructor() {}
  index(req, res) {
    db.query("SELECT *, DATE_FORMAT(nacimiento, '%Y-%m-%d') AS fecha_nacimiento FROM personas ORDER BY nombre ASC", (err, result) => {
      res.send(result)
    })
  }
  store(req, res) {
    db.query('SELECT * FROM personas WHERE cedula = ?', [req.body.cedula], (err, result) => {
      if (err) {
        res.send({
          err: JSON.stringify(err),
          mgs: 'ocurrio un error'
        })
      } else if (result.length == 0) {
        db.query('INSERT INTO personas (cedula, nombre, apellido1, apellido2, nacimiento, telefono, correo, direccion, ciudad) VALUES(?,?,?,?,?,?,?,?,?)',
          [
            req.body.cedula,
            req.body.nombre.toUpperCase(),
            req.body.apellido1.toUpperCase(),
            req.body.apellido2.toUpperCase(),
            req.body.nacimiento,
            req.body.telefono,
            req.body.correo,
            req.body.direccion,
            req.body.ciudad.toUpperCase()
          ],
          function (err, result) {
            if (err) {
              res.send({
                error: JSON.stringify(err),
                msg: 'ocurrió un error'
              });
            } else {
              res.send({
                error: false,
                msg: req.body.nombre + ' fue registrado!',
                affectedRows: result.affectedRows
              })
            }
          })
      } else {
        res.send({
          error: true,
          msg: `La cedula ${req.body.cedula} ya existe!`
        })
      }
    })
  }
  showNew(req, res) {
    db.query("SELECT * FROM personas WHERE DATE_FORMAT(fecha_creacion, '%Y-%m-%d') = ?", [req.params.fecha], function (err, result) {
      if (!err) {
        res.json(result)
      }
    })
  }
  edit(req, res) {
    db.query("SELECT *, DATE_FORMAT(nacimiento, '%Y-%m-%d') AS fecha_nacimiento FROM personas WHERE id = ?",
      [req.params.id], (err, result) => {
        res.json(result[0])
      })
  }
  update(req, res) {
    db.query('UPDATE personas SET cedula = ?, nombre = ?, apellido1 = ?, apellido2 = ?, nacimiento = ?, telefono = ?, correo = ?, direccion = ?, ciudad = ? WHERE id = ?',
      [req.body.cedula,
        req.body.nombre.toUpperCase(),
        req.body.apellido1.toUpperCase(),
        req.body.apellido2.toUpperCase(),
        req.body.nacimiento,
        req.body.telefono,
        req.body.correo,
        req.body.direccion,
        req.body.ciudad.toUpperCase(),
        req.body.id
      ],
      function (err, result) {
        if (err) {
          res.send({
            error: JSON.stringify(err),
            msg: 'error al actualizar los datos'
          });
        } else {
          res.send({
            affectedRows: result.affectedRows,
            msg: 'datos actulizados!'
          })
        }
      })
  }
  delete(req, res) {
    db.query('DELETE FROM personas WHERE id = ?', [req.params.id], function (err, result) {
      if (err) {
        res.send({
          error: JSON.stringify(err),
          msg: 'ocurrio un error'
        })
      } else {
        res.send({
          error: false,
          mgs: 'persona eliminada!',
          affectedRows: result.affectedRows
        })
      }
    })
  }
}

module.exports = new PersonalController();