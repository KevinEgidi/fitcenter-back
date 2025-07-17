const Sucursales = require('../models/sucursales'); // Importa el modelo Sucursales

const getAllSucursales = async (req, res) => { // Función para obtener todas las sucursales
  try {
    const sucursales = await Sucursales.findAll(); // Obtiene todas las sucursales de la base de datos
    res.send(sucursales); // Envía la lista de sucursales como respuesta
  } catch (err) {
    res.status(500).send("Database error"); // Maneja errores de la base de datos
  }
};

const getSucursalById = async (req, res) => { // Función para obtener una sucursal por ID
  try {
    const sucursal = await Sucursales.findByPk(req.params.id); // Busca la sucursal por ID
    if (!sucursal) return res.status(404).send("Sucursal not found"); // Si no se encuentra, envía un error 404
    res.send(sucursal); // Envía la sucursal encontrada como respuesta
  } catch (err) {
    res.status(500).send("Database error"); // Maneja errores de la base de datos
  }
};

const createSucursal = async (req, res) => { // Función para crear una nueva sucursal
  try {
    const { adress, puesto } = req.body; // Obtiene los datos del cuerpo de la petición
    const nueva = await Sucursales.create({ adress, puesto }); // Crea una nueva sucursal en la base de datos
    res.status(201).send(nueva); // Envía la nueva sucursal creada como respuesta
  } catch (err) {
    res.status(500).send("Database error"); // Maneja errores de la base de datos
  }
};

const updateSucursal = async (req, res) => { // Función para actualizar una sucursal por ID
  try {
    const sucursal = await Sucursales.findByPk(req.params.id); // Busca la sucursal por ID
    if (!sucursal) return res.status(404).send("Sucursal not found"); // Si no se encuentra, envía un error 404
    const { adress, puesto } = req.body; // Obtiene los datos del cuerpo de la petición
    await sucursal.update({ adress, puesto }); // Actualiza la sucursal con los nuevos datos
    res.send(sucursal); // Envía la sucursal actualizada como respuesta
  } catch (err) {
    res.status(500).send("Database error"); // Maneja errores de la base de datos
  }
};

const deleteSucursal = async (req, res) => { // Función para eliminar una sucursal por ID
  try {
    const sucursal = await Sucursales.findByPk(req.params.id); // Busca la sucursal por ID
    if (!sucursal) return res.status(404).send("Sucursal not found"); // Si no se encuentra, envía un error 404
    await sucursal.destroy(); // Elimina la sucursal de la base de datos
    res.send({ message: "Sucursal deleted", id: req.params.id }); // Envía un mensaje de éxito con el ID eliminado
  } catch (err) {
    res.status(500).send("Database error"); // Maneja errores de la base de datos
  }
};

module.exports = { // Exporta todas las funciones del controlador
  getAllSucursales,
  getSucursalById,
  createSucursal,
  updateSucursal,
  deleteSucursal
};