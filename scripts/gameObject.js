import { TILE_SIZE } from "../main.js";

export class GameObject {
  constructor(game, sprite) {}

  draw(ctx) {
    ctx.fillRect(0 * TILE_SIZE, 0 * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}
