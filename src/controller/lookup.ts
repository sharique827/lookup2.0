import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { isEmpty } from "lodash";
import { bodyMissing, envMissing, STATUS_CODE } from "../utils/constant";
import { createHeader } from "../utils/helper";

export async function lookup(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { env, ...body } = req.body;

    if (isEmpty(body)) throw new Error(bodyMissing);
    if (!env) throw new Error(envMissing);

    const { header, url } = await createHeader(body, env);
    if (!url) throw new Error("Failed to generate request URL");

    const response = await axios.post(url, body, {
      headers: { Authorization: header },
    });

    res.status(STATUS_CODE.SUCCESS).json(response.data);
  } catch (error) {
    next(error);
  }
}
