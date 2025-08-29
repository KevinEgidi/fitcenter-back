import User from "../../models/User.js";
import bcrypt from "bcrypt";

const userController = {
  createUser: async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        address,
        phone,
        email,
        username,
        password,
      } = req.body;

      if (
        !first_name ||
        !last_name ||
        !address ||
        !phone ||
        !email ||
        !username ||
        !password
      ) {
        return res.status(400).json({
          success: false,
          msg: "Missing required fields",
        });
      }

      // ENCRIPTAR LA CONSTRASEÑA ANTES DE GUARDAR
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        first_name,
        last_name,
        address,
        phone,
        email,
        username,
        password: hashedPassword,
      });

      res.status(201).json({
        success: true,
        msg: "User created successfully",
        data: newUser,
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ message: "User not found" });

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { first_name, last_name, address, phone, email, username } =
        req.body;

      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ message: "User not found" });

      await user.update({
        first_name,
        last_name,
        address,
        phone,
        email,
        username,
      });
      res.json({ message: "User updated", user });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ message: "User not found" });

      await user.destroy();
      res.json({ message: "User deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  },
};

export default userController;
