import express from "express";
import dotenv from "dotenv";
import { router } from "./src/routes/route";
import { PORT, serverMessage } from "./src/utils/constant";

dotenv.config();

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(serverMessage));
