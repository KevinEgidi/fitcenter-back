const express = require("express");
const dotenv = require("dotenv");
const sequelize = require('./config/database');

dotenv.config();
const server = express();
const router = require("./src/routes/routes")
router.use(express.json());
server.set('port', 3000);
server.use((req,res,next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

server.use('/', router);

server.listen(server.get('port'), () => {
    console.log('Servidor corriendo en el puerto', server.get('port'));
})
