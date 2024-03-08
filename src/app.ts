import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// Agora você pode acessar as variáveis de ambiente usando process.env, por exemplo:
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const port = process.env.PORT;
const secretKey = process.env.SECRET_KEY;
