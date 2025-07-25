const { Router } = require('express'); // Importa Router de Express
const bookingController = require('../controllers/booking/booking.controllers'); // Importa el controlador de turnos

const router = Router(); // Crea una instancia de Router
 
router.get('/', bookingController.getAllBooking); // Ruta para obtener todos los turnos
router.get('/:id', bookingController.getBookingById); // Ruta para obtener un turno por ID
router.post('/', bookingController.createBooking); // Ruta para crear un nuevo turno
router.put('/:id', bookingController.updateBooking); // Ruta para actualizar un turno por ID
router.delete('/:id', bookingController.deleteBooking); // Ruta para eliminar un turno por ID

module.exports = router; // Exporta el router para usarlo en otras partes de la aplicación