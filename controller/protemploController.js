const db = require('../database');
const {
  remplasar
} = require('../helpers');

class ProtemploController {
  constructor() {}
  index(req, res) {
    db.query("SELECT id_protemplo, protemplo.id_persona, WEEK(protemplo.fecha) AS semana, DATE_FORMAT(protemplo.fecha, '%d del mes %m del %Y') AS fecha, personas.cedula, personas.nombre, personas.apellido1, personas.apellido2, cantidad AS cantidad_protemplo FROM protemplo, personas WHERE protemplo.id_persona = personas.id ORDER BY protemplo.fecha DESC", function (err, result) {
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
    db.query('INSERT INTO protemplo (id_persona,fecha,cantidad) VALUES (?,?,?)',
      [req.body.id_persona, req.body.fecha, remplasar(req.body.cantidad_protemplo)],
      function (err, result) {
        if (err) {
          res.send({
            error: true,
            msg: JSON.stringify(err)
          })
        } else {
          res.send({
            error: false,
            mgs: 'Protemplo registrado!',
            affectedRows: result.affectedRows
          })
        }
      });
  }
  edit(req, res) {
    db.query("SELECT id_protemplo,id_persona,cantidad AS cantidad_protemplo, DATE_FORMAT(protemplo.fecha, '%Y-%m-%d') AS fecha FROM protemplo WHERE id_protemplo = ?",
      [req.params.id], (err, result) => {
        if (!err) {
          res.send(result)
        }
      })
  }
  update(req, res) {
    db.query('UPDATE protemplo SET id_persona = ?, cantidad = ?, fecha = ? WHERE id_protemplo = ?',
      [req.body.id_persona, remplasar(req.body.cantidad_protemplo), req.body.fecha, req.body.id],
      function (err, result) {
        if (!err) {
          res.send({
            error: false,
            msg: 'Protemplo actualizado',
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
    db.query('DELETE FROM protemplo WHERE id_protemplo = ?', [
      req.params.id
    ], function (err, result) {
      if (!err) {
        res.send({
          error: false,
          mgs: 'Protemplo eliminado!',
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
    db.query('SELECT personas.id, personas.nombre, personas.apellido1, personas.apellido2 FROM personas WHERE personas.id NOT IN (SELECT protemplo.id_persona FROM protemplo WHERE protemplo.fecha = ?) ORDER BY personas.nombre',
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
module.exports = new ProtemploController();