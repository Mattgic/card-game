import Koa, { ExtendableContext } from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

import {
  addPlayer,
  getCurrentGame,
  getCurrentGamePlayers,
  getGameStatus,
} from "./game";
import { getGamePlayers } from "./model/game";

const PORT = 8080;

app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

router.get("/", async (ctx) => {
  ctx.body = "Hello World !";
});

router.get("/status", (ctx: ExtendableContext) => {
  ctx.body = getCurrentGame().status;
});

interface NewPlayerRequest {
  name: string;
}
router.post("/addPlayer", async (ctx: ExtendableContext, next) => {
  addPlayer((ctx.request.body as NewPlayerRequest).name);
  ctx.body = getGamePlayers(getCurrentGame());
  await next();
});

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
