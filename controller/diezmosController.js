const db = require('../database');
const {remplasar} = require('../helpers');
class DiezmosController {
  constructor() {}

  showPersonas(req, res) {
    db.query('SELECT personas.id, personas.nombre, personas.apellido1, personas.apellido2 FROM personas WHERE personas.id NOT IN (SELECT diezmos.id_persona FROM diezmos WHERE diezmos.fecha = ?) ORDER BY personas.nombre',
      [req.params.fecha],
      function (err, result) {
        if (!err) {
          res.send(result)
        } else {
          res.send({
            error: JSON.stringify(err),
            mgs: 'ocurrio un error'
          });
        }
      });
  }
  store(req, res) {
    db.query('INSERT INTO diezmos (id_persona,fecha,cantidad) VALUES (?,?,?)',
      [req.body.id_persona, req.body.fecha, req.body.cantidad_diezmo.replace(/[^\d-]/g, '') * 1],
      function (err, result) {
        if (err) {
          res.send({
            error: true,
            msg: JSON.stringify(err)
          })
        } else {
          res.send({
            error: false,
            mgs: 'diezmo registrado!',
            affectedRows: result.affectedRows
          })
        }
      });
  }
  index(req, res) {
    db.query("SELECT id_diezmo, diezmos.id_persona, WEEK(diezmos.fecha) AS semana, DATE_FORMAT(diezmos.fecha, '%d del mes %m del %Y') AS fecha, personas.cedula, personas.nombre, personas.apellido1, personas.apellido2, cantidad AS cantidad_diezmo FROM diezmos, personas WHERE diezmos.id_persona = personas.id ORDER BY diezmos.fecha DESC", function (err, result) {
      if (!err) {
        res.send(result);
      } else {
        res.send({
          error: JSON.stringify(err)
        });
      }
    });
  }
  edit(req, res) {
    db.query("SELECT id_diezmo,id_persona, cantidad AS cantidad_diezmo, DATE_FORMAT(diezmos.fecha, '%Y-%m-%d') AS fecha FROM diezmos WHERE id_diezmo = ?",
      [req.params.id], (err, result) => {
        if (!err) {
          res.send(result)
        }
      });
  }
  update(req, res) {
    db.query('UPDATE diezmos SET id_persona = ?, cantidad = ?, fecha = ? WHERE id_diezmo = ?',
      [req.body.id_persona, remplasar(req.body.cantidad_diezmo), req.body.fecha, req.body.id],
      function (err, result) {
        if (!err) {
          res.send({
            error: false,
            msg: 'diezmo actualizado',
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
    db.query('DELETE FROM diezmos WHERE id_diezmo = ?', [
      req.params.id
    ], function (err, result) {
      if (!err) {
        res.send({
          error: false,
          mgs: 'Diezmo eliminado!',
          affectedRows: result.affectedRows
        })
      } else {
        res.send({
          error: true,
          mgs: JSON.stringify(err)
        })
      }
    });
  }
}
module.exports = new DiezmosController();