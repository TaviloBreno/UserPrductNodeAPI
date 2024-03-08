import express from "express";
import { db } from "../config/database";
import { UserRow } from "../models/User";

export const createUser = (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [username, email, password], (err) => {
    if (err) {
      console.error("Erro ao cadastrar usuário:", err);
      res.status(500).json({ error: "Erro ao cadastrar usuário" });
      return;
    }
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  });
};

export const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id;

  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [userId], (err, result: UserRow[]) => {
    if (err) {
      console.error("Erro ao buscar usuário:", err);
      res.status(500).json({ error: "Erro ao buscar usuário" });
      return;
    }
    if (!result || result.length === 0) {
      res.status(404).json({ error: "Usuário não encontrado" });
      return;
    }
    res.json(result[0]);
  });
};

export const updateUser = (req: Request, res: Response) => {
  const userId = req.params.id;
  const { username, email, password } = req.body;

  const sql =
    "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?";
  db.query(sql, [username, email, password, userId], (err) => {
    if (err) {
      console.error("Erro ao atualizar usuário:", err);
      res.status(500).json({ error: "Erro ao atualizar usuário" });
      return;
    }
    res.json({ message: "Usuário atualizado com sucesso" });
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const userId = req.params.id;

  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [userId], (err) => {
    if (err) {
      console.error("Erro ao excluir usuário:", err);
      res.status(500).json({ error: "Erro ao excluir usuário" });
      return;
    }
    res.json({ message: "Usuário excluído com sucesso" });
  });
};