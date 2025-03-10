import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";

import type { AppRouteHandler } from "@/lib/types";

import { createDb } from "@/db";
import { tasks } from "@/db/schema";
import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from "@/lib/constants";

import type { ReturnAnEnvVarRoute, SayhiRoute } from "./uiuc-chat.routes";


export const sayhi: AppRouteHandler<SayhiRoute> = async (c) => {
  return c.json({
    Kastan: "says hi",
  }, HttpStatusCodes.OK);
};


export const returnAnEnvVar: AppRouteHandler<ReturnAnEnvVarRoute> = async (c) => {
  return c.json({
    env: c.env.NODE_ENV,
  }, HttpStatusCodes.OK);
};
