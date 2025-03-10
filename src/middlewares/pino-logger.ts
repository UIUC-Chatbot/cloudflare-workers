import type { Context, MiddlewareHandler } from "hono";
import type { Env } from "hono-pino";

import { logger } from "hono-pino";
import { randomUUID } from "node:crypto";
import pino from "pino";

import type { AppBindings } from "@/lib/types";

export function pinoLogger() {
  return ((c, next) => logger({
    pino: pino({
      level: c.env.LOG_LEVEL || "info",
      enabled: true,
    }),
    http: {
      reqId: () => randomUUID(),
    },
  })(c as unknown as Context<Env>, next)) satisfies MiddlewareHandler<AppBindings>;
}
