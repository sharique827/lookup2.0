import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { router } from "./src/routes/route";
import { PORT, serverMessage, STATUS_CODE } from "./src/utils/constant";
import { errorMessage } from "./src/utils/helper";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/ping", (_req: Request, res: Response) => {
  res.status(200).send("pong");
});

const pingSelf = async () => {
  try {
    const baseUrl =
      process.env.RENDER_EXTERNAL_URL || "https://your-app-name.onrender.com";
    const response = await axios.get(`${baseUrl}/ping`);
    console.log(`[Self-ping] pong at ${new Date().toISOString()}`);
  } catch (error: any) {
    console.error(`[Self-ping] failed: ${error.message}`);
  }
};

setInterval(pingSelf, 10 * 60 * 1000);
app.use(router);

app.use(
  (error: any, _req: Request, res: Response, _next: NextFunction): any => {
    return res
      .status(error.status || STATUS_CODE.NOT_FOUND)
      .json(error.response ? error.response.data : errorMessage(error.message));
  }
);

app.listen(PORT, () => console.log(serverMessage));
