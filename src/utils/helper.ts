import { createAuthorizationHeader } from "ondc-crypto-sdk-nodejs";
import { ENV, incorrectENV, ACK_STATUS } from "./constant";

export async function creatingHeader(
  payload: { [key: string]: any },
  env: any
) {
  try {
    const keys = getEnvBasedKeys(env);

    let header = await createAuthorizationHeader({
      body: JSON.stringify(payload),
      privateKey: keys.PRIVATE_KEY || "",
      subscriberId: keys.SUBSCRIBER_ID || "",
      subscriberUniqueKeyId: keys.UKID || "",
    });

    return { header, url: keys.URL };
  } catch (error) {
    throw error;
  }
}

function getEnvBasedKeys(env: string) {
  switch (String(env).toLowerCase()) {
    case ENV.STAGING:
      return {
        URL: process.env.STG_URL,
        SUBSCRIBER_ID: process.env.STG_SUBSCRIBER_ID,
        UKID: process.env.STG_UKID,
        PRIVATE_KEY: process.env.STG_PRIVATE_KEY,
      };
    case ENV.PREPROD:
      return {
        URL: process.env.PRE_URL,
        SUBSCRIBER_ID: process.env.PRE_SUBSCRIBER_ID,
        UKID: process.env.PRE_UKID,
        PRIVATE_KEY: process.env.PRE_PRIVATE_KEY,
      };
    case ENV.PROD:
      return {
        URL: process.env.PROD_URL,
        SUBSCRIBER_ID: process.env.PROD_SUBSCRIBER_ID,
        UKID: process.env.PROD_UKID,
        PRIVATE_KEY: process.env.PROD_PRIVATE_KEY,
      };
    default:
      throw new Error(incorrectENV);
  }
}

export function errorMessage(error: any) {
  return {
    message: {
      ack: {
        status: ACK_STATUS.NACK,
      },
    },
    error: {
      message: error,
    },
  };
}
