import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import router from "./routes/index";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

// Configurar CORS
app.use(cors());
dotenv.config();
export const prisma = new PrismaClient();
const port = process.env.API_PORT || 9090;

async function main() {
  app.use(express.json());

  app.use(router);

  app.get("/health", (req, res) => {
    res.send("API SIGMED is running 🚀");
  });

  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
    console.log("Connected to the MySQL database 🚀");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
