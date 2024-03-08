// routes/protectedRoute.ts
import express from "express";
import { authenticateToken } from "../middlewares/authentication";

const router = express.Router();

// Rota protegida que requer autenticação JWT
router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Rota protegida. Acesso concedido" });
});

export default router;
