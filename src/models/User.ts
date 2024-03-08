// src/models/User.ts

// Importe o módulo 'mysql' para usar os tipos de dados do MySQL
import { FieldPacket, QueryError } from "mysql";

// Defina uma interface TypeScript para representar o modelo de usuário
export interface User {
  id?: number; // O ID é opcional porque será gerado automaticamente no banco de dados
  username: string;
  email: string;
  password: string;
  created_at?: Date; // Data de criação é opcional porque será preenchida automaticamente no banco de dados
  updated_at?: Date; // Data de atualização é opcional porque será preenchida automaticamente no banco de dados
}

// Defina um tipo para representar o resultado de uma consulta SQL que retorna um usuário
export type UserRow = [User, FieldPacket[]] | undefined;
