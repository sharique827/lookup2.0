import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { router } from "./src/routes/route";
import { PORT, serverMessage, STATUS_CODE } from "./src/utils/constant";
import { errorMessage } from "./src/utils/helper";

dotenv.config();

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (error: any, _req: Request, res: Response, _next: NextFunction): any => {
    return res
      .status(error.status || STATUS_CODE.NOT_FOUND)
      .json(error.response ? error.response.data : errorMessage(error.message));
  }
);

app.listen(PORT, () => console.log(serverMessage));
