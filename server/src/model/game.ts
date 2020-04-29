import { Game } from "../types";

export const getGamePlayers = (game: Game): string[] => {
  return Object.keys(game.players);
};

export const addGamePlayer = (game: Game, playerName: string) => {
  game.players[playerName] = 0;
};
