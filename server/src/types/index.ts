type Players = {
  [playerName: string]: number;
};

type GameStatus = "NONE" | "WAITING_FOR_PLAYERS" | "GAME_IN_PROGRESS";

export type Game = {
  status: GameStatus;
  players: Players;
  roundNb: 0;
};
