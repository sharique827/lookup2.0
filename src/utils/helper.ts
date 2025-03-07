import { createAuthorizationHeader } from "ondc-crypto-sdk-nodejs";
import { ENV, incorrectENV, ACK_STATUS, PREENV } from "./constant";

export async function createHeader(
  payload: { [key: string]: any },
  env: string
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
  const envPrefix = {
    [ENV.STAGING]: [PREENV.STG],
    [ENV.PREPROD]: [PREENV.PRE],
    [ENV.PROD]: [PREENV.PROD],
  }[env.toLowerCase()];

  if (!envPrefix) throw new Error(incorrectENV);

  return {
    URL: process.env[`${envPrefix}_URL`],
    SUBSCRIBER_ID: process.env[`${envPrefix}_SUBSCRIBER_ID`],
    UKID: process.env[`${envPrefix}_UKID`],
    PRIVATE_KEY: process.env[`${envPrefix}_PRIVATE_KEY`],
  };
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
