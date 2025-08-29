import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";

// Importación de rutas
import categoriesRoutes from "./src/routes/routes.categories.js";
import productsRoutes from "./src/routes/routes.products.js";
import usersRoutes from "./src/routes/routes.users.js";
import administratorsRoutes from "./src/routes/routes.administrators.js";
import clientsRoutes from "./src/routes/routes.clients.js";
import instructorsRoutes from "./src/routes/routes.instructors.js";
import professorsRoutes from "./src/routes/routes.professors.js";
import membershipsRoutes from "./src/routes/routes.memberships.js";
import exercisesRoutes from "./src/routes/routes.exercise.js";
import routinesRoutes from "./src/routes/routes.routines.js";
import subsidiaryRoutes from "./src/routes/routes.subsidiary.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

// Rutas
app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/administrators", administratorsRoutes);
app.use("/clients", clientsRoutes);
app.use("/instructors", instructorsRoutes);
app.use("/professors", professorsRoutes);
app.use("/memberships", membershipsRoutes);
app.use("/subsidiary", subsidiaryRoutes);
app.use("/exercises", exercisesRoutes);
app.use("/routines", routinesRoutes);

// Ruta de prueba
app.get("/", async (req, res) => {
  try {
    const [results] = await sequelize.query("SELECT * FROM products");
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en la base de datos");
  }
});

// Sincronizar modelos y levantar servidor
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado correctamente a la base de datos");

    await sequelize.sync({ alter: true });
    console.log("🛠️ Modelos sincronizados");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error);
  }
})();
