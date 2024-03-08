import express from "express";
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/UserController";

const router = express.Router();

// Rota para criar um novo usuário
router.post("/users", createUser);

// Rota para buscar um usuário pelo ID
router.get("/users/:id", getUserById);

// Rota para atualizar um usuário existente
router.put("/users/:id", updateUser);

// Rota para excluir um usuário
router.delete("/users/:id", deleteUser);

export default router;
