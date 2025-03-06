import dotenv from "dotenv";
dotenv.config();

export const bodyMissing = "Request body is missing or empty";
export const PORT = process.env.PORT || 8080;
export const enum ENV {
  STAGING = "staging",
  PREPROD = "preprod",
  PROD = "prod",
}

export const incorrectENV = "INVALID ENVIRONMENT";

export const enum ACK_STATUS {
  ACK = "ACK",
  NACK = "NACK",
}

export const serverMessage = `Server is running on port ${PORT}`;
