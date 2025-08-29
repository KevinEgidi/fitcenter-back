import dotenv from "dotenv";
import express from "express";
import sequelize from "./config/database.js";
import cors from "cors";
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
import bookingRoutes from "./src/routes/routes.booking.js";
import subsidiaryRoutes from "./src/routes/routes.subsidiary.js";

dotenv.config();

const server = express();
server.use(express.json());
server.set("port", 3000);
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("/categories", categoriesRoutes);
server.use("/products", productsRoutes);
server.use("/users", usersRoutes);
server.use("/administrators", administratorsRoutes);
server.use("/clients", clientsRoutes);
server.use("/instructors", instructorsRoutes);
server.use("/professors", professorsRoutes);
server.use("/memberships", membershipsRoutes);
server.use("/booking", bookingRoutes);
server.use("/subsidiary", subsidiaryRoutes);
server.use("/exercises", exercisesRoutes);
server.use("/routines", routinesRoutes);

server.listen(server.get("port"), () => {
  console.log("Servidor corriendo en el puerto", server.get("port"));
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado correctamente a la base de datos");

    await sequelize.sync({ alter: true });
    console.log("🛠️ Modelos sincronizados");

    server.listen(server.get("port"), () => {
      console.log("Servidor corriendo en el puerto", server.get("port"));
    });
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error);
  }
})();
