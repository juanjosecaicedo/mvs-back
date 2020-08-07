// eslint-disable-next-line no-unused-vars
const io = require('socket.io');

class EventosController {
  constructor() {}
  store(req, res) {
    let eFile = req.files.file;
    eFile.mv(`../files/${eFile.name}`, err => {
      if(err) return res.status(500).json({msg: err})
      return res.status(200).send({msg: 'File upload'})
    })
    // io.on('connection', function (socket) {
    //   socket.on('new-event', function (event) {
    //     socket.emit('new-event', event);
    //     res.json(event);
    //   });
    // });
  }
}
module.exports = new EventosController();