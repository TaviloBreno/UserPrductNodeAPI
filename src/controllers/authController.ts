// middlewares/authentication.ts
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/authUtils";
import { JWTPayload } from "../interfaces/JWTPayload";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Obtém o token do cabeçalho Authorization
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ error: "Token de autenticação não fornecido" });
    }

    // Verifica se o token é válido
    const decoded = verifyToken(token) as JWTPayload;

    // Adiciona o ID do usuário decodificado ao objeto de solicitação
    req.userId = decoded.userId;

    // Chama o próximo middleware
    next();
  } catch (error) {
    console.error("Erro ao autenticar token:", error);
    res.status(403).json({ error: "Falha na autenticação. Token inválido" });
  }
};
