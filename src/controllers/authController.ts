// controllers/authController.ts
import { Request, Response } from "express";
import { generateToken } from "../utils/authUtils";

export const login = (req: Request, res: Response) => {
  // Lógica de autenticação...
  const userId = "idDoUsuario"; // Supondo que você tenha o ID do usuário após a autenticação
  const token = generateToken(userId);
  res.json({ token });
};
