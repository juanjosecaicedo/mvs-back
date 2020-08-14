const db = require('../database');
const {
  remplasar
} = require('../helpers');

class OfrendasController {
  constructor() {}
  index(req, res) {
    db.query("SELECT id_ofrenda, ofrendas.id_persona, WEEK(ofrendas.fecha) AS semana, DATE_FORMAT(ofrendas.fecha, '%d del mes %m del %Y') AS fecha, personas.cedula, personas.nombre, personas.apellido1, personas.apellido2, cantidad AS cantidad_ofrenda FROM ofrendas, personas WHERE ofrendas.id_persona = personas.id ORDER BY ofrendas.fecha DESC", function (err, result) {
      if (!err) {
        res.send(result);
      } else {
        res.send({
          error: JSON.stringify(err)
        })
      }
    })
  }
  store(req, res) {    
    db.query('INSERT INTO ofrendas (id_persona,fecha,cantidad) VALUES (?,?,?)',
      [req.body.id_persona, req.body.fecha, remplasar(req.body.cantidad_ofrenda)],
      function (err, result) {
        if (err) {
          res.send({
            error: true,
            msg: JSON.stringify(err)
          })
        } else {
          res.send({
            error: false,
            mgs: 'Ofrenda registrado!',
            affectedRows: result.affectedRows
          })
        }
      });
  }
  edit(req, res) {
    db.query("SELECT id_ofrenda,id_persona,cantidad AS cantidad_ofrenda, DATE_FORMAT(ofrendas.fecha, '%Y-%m-%d') AS fecha FROM ofrendas WHERE id_ofrenda = ?",
      [req.params.id], (err, result) => {
        if (!err) {
          res.send(result)
        }
      })
  }
  update(req, res) {

    db.query('UPDATE ofrendas SET id_persona = ?, cantidad = ?, fecha = ? WHERE id_ofrenda = ?',
      [req.body.id_persona, remplasar(req.body.cantidad_ofrenda), req.body.fecha, req.body.id],
      function (err, result) {
        if (!err) {
          res.send({
            error: false,
            msg: 'Ofreda actualizado',
            affectedRows: result.affectedRows
          });
        } else {
          res.send({
            error: true,
            msg: JSON.stringify(err)
          });
        }
      });
  }
  delete(req, res) {
    db.query('DELETE FROM ofrendas WHERE id_ofrenda = ?', [
      req.params.id
    ], function (err, result) {
      if (!err) {
        res.send({
          error: false,
          mgs: 'Ofrenda eliminado!',
          affectedRows: result.affectedRows
        })
      } else {
        res.send({
          error: true,
          mgs: JSON.stringify(err)
        })
      }
    })
  }
  showPersonas(req, res) {
    db.query('SELECT personas.id, personas.nombre, personas.apellido1, personas.apellido2 FROM personas WHERE personas.id NOT IN (SELECT ofrendas.id_persona FROM ofrendas WHERE ofrendas.fecha = ?) ORDER BY personas.nombre',
      [req.params.fecha],
      function (err, result) {
        if (!err) {
          res.send(result)
        } else {
          res.send({
            error: JSON.stringify(err),
            mgs: 'ocurrio un error'
          })
        }
      })
  }
}
module.exports = new OfrendasController();