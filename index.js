const express = require('express');
const morgan = require('morgan');

const fileupload = require('express-fileupload');
const cors = require("cors");

class Server {
    app = express();
    constructor() {
        this.config();
        this.routes();        
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);        
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: false
        }));
        this.app.use(fileupload());  
    }
    routes() {
        this.app.use('/', require('./routes/indexRoutes'));
        this.app.use('/api', require('./routes/personalRoutes'));
        this.app.use('/api', require('./routes/ofrendasRoutes'));
        this.app.use('/api', require('./routes/diezmosRoutes'));
        this.app.use('/api', require('./routes/authRoutes'));
        this.app.use('/api', require('./routes/protemploRoutes'));
        this.app.use('/api', require('./routes/eventosRoutes'));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {            
            console.log('server on port ' + this.app.get('port'));
        })
    }
}

new Server().start();