export interface PlayerPiece {
  id: string;
  pos: number;
  travelCount: number;
}

export interface GameState {
  player1: PlayerPiece[];
  player2: PlayerPiece[];
  player3: PlayerPiece[];
  player4: PlayerPiece[];
  chancePlayer: number;
  diceNo: number;
  isDiceRolled: boolean;
  pileSelectionPlayer: number;
  cellSelectionPlayer: number;
  touchDiceBlock: boolean;
  currentPositions: any[];
  fireworks: boolean;
  winner: string | null;
}

const player1InitialState: PlayerPiece[] = [
  {id: 'A1', pos: 0, travelCount: 0},
  {id: 'A2', pos: 0, travelCount: 0},
  {id: 'A3', pos: 0, travelCount: 0},
  {id: 'A4', pos: 0, travelCount: 0},
];

const player2InitialState: PlayerPiece[] = [
  {id: 'B1', pos: 0, travelCount: 0},
  {id: 'B2', pos: 0, travelCount: 0},
  {id: 'B3', pos: 0, travelCount: 0},
  {id: 'B4', pos: 0, travelCount: 0},
];

const player3InitialState: PlayerPiece[] = [
  {id: 'C1', pos: 0, travelCount: 0},
  {id: 'C2', pos: 0, travelCount: 0},
  {id: 'C3', pos: 0, travelCount: 0},
  {id: 'C4', pos: 0, travelCount: 0},
];

const player4InitialState: PlayerPiece[] = [
  {id: 'D1', pos: 0, travelCount: 0},
  {id: 'D2', pos: 0, travelCount: 0},
  {id: 'D3', pos: 0, travelCount: 0},
  {id: 'D4', pos: 0, travelCount: 0},
];

export const initialState: GameState = {
  player1: player1InitialState,
  player2: player2InitialState,
  player3: player3InitialState,
  player4: player4InitialState,
  chancePlayer: 1,
  diceNo: 1,
  isDiceRolled: false,
  pileSelectionPlayer: -1,
  cellSelectionPlayer: -1,
  touchDiceBlock: false,
  currentPositions: [],
  fireworks: false,
  winner: null,
};
