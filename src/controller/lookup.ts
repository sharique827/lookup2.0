import { Request, Response } from "express";
import axios from "axios";
import { isEmpty } from "lodash";
import { bodyMissing } from "../utils/constant";
import { creatingHeader, errorMessage } from "../utils/helper";

export async function lookup(req: Request, res: Response): Promise<any> {
  try {
    const { env } = req.params;
    if (!req.body || isEmpty(req.body)) throw new Error(bodyMissing);

    const { header, url } = await creatingHeader(req.body, env);

    const response = await axios.post(url as string, req.body, {
      headers: {
        Authorization: header,
      },
    });
    return res.json(response.data);
  } catch (error: any) {
    return res
      .status(404)
      .json(error.response ? error.response.data : errorMessage(error.message));
  }
}
