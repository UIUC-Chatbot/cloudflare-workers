import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
import index from "@/routes/index.route";
import tasks from "@/routes/tasks/tasks.index";
import uiucChat from "@/routes/uiuc-chat/uiuc-chat.index";
const app = createApp();

configureOpenAPI(app);

const routes = [
  index,
  // tasks,
  uiucChat,
] as const;

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = typeof routes[number];

export default app;
