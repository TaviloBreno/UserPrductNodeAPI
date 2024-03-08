import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// Configuração da conexão com o banco de dados
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "nome_do_banco_de_dados",
};

// Criação da conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

// Estabelecendo conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conexão bem-sucedida com o banco de dados");
});

export default connection;
