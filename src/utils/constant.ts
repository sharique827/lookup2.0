import dotenv from "dotenv";
dotenv.config();

export const bodyMissing = "Request body is missing or empty";
export const PORT = process.env.PORT || 8080;
export const enum ENV {
  STAGING = "staging",
  PREPROD = "preprod",
  PROD = "prod",
}

export const enum PREENV {
  STG = "STG",
  PRE = "PRE",
  PROD = "PROD",
}

export const incorrectENV = "INVALID ENVIRONMENT";

export const enum ACK_STATUS {
  ACK = "ACK",
  NACK = "NACK",
}

export const enum STATUS_CODE {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export const serverMessage = `Server is running on port ${PORT}`;
