// express.d.ts
import { Request } from "express";
import { JWTPayload } from "./src/interfaces/JWTPayload";

declare module "express" {
  interface Request {
    userId?: JWTPayload["userId"]; // Adiciona a propriedade userId ao objeto Request
  }
}
