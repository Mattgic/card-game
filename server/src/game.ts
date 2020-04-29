import { ExtendableContext } from "koa";
import { Game } from "./types";
import { addGamePlayer, getGamePlayers } from "./model/game";

const createGame = (): Game => {
  return {
    status: "NONE",
    players: {},
    roundNb: 0,
  };
};

const games: Game[] = [createGame()];

export const getCurrentGame = () => games[games.length - 1];

export const getGameStatus = (ctx: ExtendableContext): void => {
  ctx.body = getCurrentGame().status;
};

export const addPlayer = (newPlayerName: string) => {
  const currentGame = getCurrentGame();
  addGamePlayer(currentGame, newPlayerName);
  return getGamePlayers(currentGame);
};
