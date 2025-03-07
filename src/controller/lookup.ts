import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { isEmpty } from "lodash";
import { bodyMissing, STATUS_CODE } from "../utils/constant";
import { creatingHeader } from "../utils/helper";

export async function lookup(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const { env } = req.params;
    if (!req.body || isEmpty(req.body)) throw new Error(bodyMissing);

    const { header, url } = await creatingHeader(req.body, env);

    const response = await axios.post(url as string, req.body, {
      headers: {
        Authorization: header,
      },
    });
    return res.status(STATUS_CODE.SUCCESS).json(response.data);
  } catch (error) {
    next(error);
  }
}
