// backend/controllers/turnos.controller.js
const Turnos = require('../models/turnos'); // Importa el modelo Turnos

const getAllTurnos = async (req, res) => { // Función para obtener todos los turnos
  try {
    const turnos = await Turnos.findAll(); // Obtiene todos los turnos de la base de datos
    res.send(turnos); // Envía los turnos como respuesta
  } catch (err) { // Maneja errores de la base de datos
    res.status(500).send("Database error"); 
  }
};

const getTurnoById = async (req, res) => { // Función para obtener un turno por ID
  try {
    const turno = await Turnos.findByPk(req.params.id);  // Busca el turno por ID
    if (!turno) return res.status(404).send("Turno not found"); // Si no se encuentra, envía un error 404
    res.send(turno); // Envía el turno encontrado como respuesta
  } catch (err) { // Maneja errores de la base de datos
    res.status(500).send("Database error");
  }
};

const createTurno = async (req, res) => { // Función para crear un nuevo turno
  try {
    const { actividad, horarioEntra, horarioSal } = req.body; // Obtiene los datos del cuerpo de la petición
    const nuevo = await Turnos.create({ actividad, horarioEntra, horarioSal }); // Crea un nuevo turno en la base de datos
    res.status(201).send(nuevo); // Envía el nuevo turno creado como respuesta
  } catch (err) {   // Maneja errores de la base de datos
    res.status(500).send("Database error");
  }
};

const updateTurno = async (req, res) => { // Función para actualizar un turno por ID
  try {
    const turno = await Turnos.findByPk(req.params.id); // Busca el turno por ID
    if (!turno) return res.status(404).send("Turno not found"); // Si no se encuentra, envía un error 404
    const { actividad, horarioEntra, horarioSal } = req.body; // Obtiene los datos del cuerpo de la petición
    await turno.update({ actividad, horarioEntra, horarioSal }); // Actualiza el turno con los nuevos datos
    res.send(turno); // Envía el turno actualizado como respuesta
  } catch (err) { // Maneja errores de la base de datos
    res.status(500).send("Database error");
  }
};

const deleteTurno = async (req, res) => { // Función para eliminar un turno por ID
  try {
    const turno = await Turnos.findByPk(req.params.id); // Busca el turno por ID
    if (!turno) return res.status(404).send("Turno not found"); // Si no se encuentra, envía un error 404
    await turno.destroy(); // Elimina el turno de la base de datos
    res.send({ message: "Turno deleted", id: req.params.id }); // Envía un mensaje de éxito y el ID del turno eliminado
  } catch (err) { // Maneja errores de la base de datos
    res.status(500).send("Database error"); 
  }
};

module.exports = { // Exporta las funciones del controlador
  getAllTurnos,
  getTurnoById,
  createTurno,
  updateTurno,
  deleteTurno
};