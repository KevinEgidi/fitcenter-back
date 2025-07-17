import express from "express";
import sequelize from './config/database.js';
import cors from 'cors';
import dotenv from "dotenv";
import categoriesRoutes from "./src/routes/routes.categories.js";
import productsRoutes from "./src/routes/routes.products.js";
const turnosRoutes = require('./routes/turnos.routes');  
const sucursalesRoutes = require('./routes/sucursales.routes'); 

dotenv.config();

const server = express();
server.use(express.json());
server.set('port', 3000);
server.use(cors({
    origin: '*',
    credentials: true,
  }));
  
server.use('/categories', categoriesRoutes);
server.use('/products', productsRoutes);
server.use('/turnos', turnosRoutes); 
server.use("/sucursales", sucursalesRoutes); 


server.listen(server.get('port'), () => {
    console.log('Servidor corriendo en el puerto', server.get('port'));
  });

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('✅ Conectado correctamente a la base de datos');

//     await sequelize.sync({ alter: true });
//     console.log('🛠️ Modelos sincronizados');

//     server.listen(server.get('port'), () => {
//     console.log('Servidor corriendo en el puerto', server.get('port'));
//   });
//   } catch (error) {
//     console.error('❌ Error conectando a la base de datos:', error);
//   }
// })();
