import { Hero } from "./scripts/hero.js";
import { World } from "./scripts/world.js";

export const TILE_SIZE = 32;
export const COLS = 15;
export const ROWS = 20;
const GAME_WIDTH = TILE_SIZE * COLS;
const GAME_HEIGHT = TILE_SIZE * ROWS;

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;

  const world = new World();
  world.drawGrid(ctx);

  const hero = new Hero({});
  hero.draw(ctx);
});
