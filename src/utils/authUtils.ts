// utils/authUtils.ts
import jwt from "jsonwebtoken";
import { Request } from "express";

const secretKey = process.env.SECRET_KEY || "sua-chave-secreta";

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, secretKey, { expiresIn: "1h" });
};

export const verifyToken = (token: string): string | object => {
  return jwt.verify(token, secretKey);
};

export const getTokenFromHeaders = (req: Request): string | null => {
  const authorizationHeader = req.headers["authorization"];
  if (authorizationHeader && authorizationHeader.split(" ")[0] === "Bearer") {
    return authorizationHeader.split(" ")[1];
  }
  return null;
};
