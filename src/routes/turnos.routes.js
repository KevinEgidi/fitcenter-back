// backend/routes/turnos.routes.js
const { Router } = require('express'); // Importa Router de Express
const turnosController = require('../controllers/turnos.controller'); // Importa el controlador de turnos

const router = Router(); // Crea una instancia de Router
 
router.get('/', turnosController.getAllTurnos); // Ruta para obtener todos los turnos
router.get('/:id', turnosController.getTurnoById); // Ruta para obtener un turno por ID
router.post('/', turnosController.createTurno); // Ruta para crear un nuevo turno
router.put('/:id', turnosController.updateTurno); // Ruta para actualizar un turno por ID
router.delete('/:id', turnosController.deleteTurno); // Ruta para eliminar un turno por ID

module.exports = router; // Exporta el router para usarlo en otras partes de la aplicación