import { createRouter } from "@/lib/create-app";

import * as handlers from "./uiuc-chat.handlers";
import * as routes from "./uiuc-chat.routes";

const router = createRouter()
  .openapi(routes.sayhi, handlers.sayhi)
  .openapi(routes.returnAnEnvVar, handlers.returnAnEnvVar);


export default router;
