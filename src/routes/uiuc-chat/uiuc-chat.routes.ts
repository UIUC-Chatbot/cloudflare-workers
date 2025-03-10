import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema } from "stoker/openapi/schemas";

const tags = ["Demo"];

export const sayhi = createRoute({
  path: "/sayhi",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({
        "Kastan": z.string(),
      }),
      "says hi",
    ),
  },
});


export const returnAnEnvVar = createRoute({
  path: "/return-an-env-var",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({
        env: z.string(),
      }),
      "Environment variable",
    ),
  },
});


export type SayhiRoute = typeof sayhi;
export type ReturnAnEnvVarRoute = typeof returnAnEnvVar;