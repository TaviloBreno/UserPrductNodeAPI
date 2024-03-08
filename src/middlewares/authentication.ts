// middlewares/authentication.ts
import { Request, Response, NextFunction } from "express";
import { verifyToken, getTokenFromHeaders } from "../utils/authUtils";
import { JWTPayload } from "../interfaces/JWTPayload";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = getTokenFromHeaders(req);
    if (!token) {
      return res
        .status(401)
        .json({ error: "Token de autenticação não fornecido" });
    }
    const decoded = verifyToken(token) as JWTPayload; // Faz uma verificação de tipo
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ error: "Falha na autenticação. Token inválido" });
  }
};
