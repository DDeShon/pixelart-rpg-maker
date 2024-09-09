import { TILE_SIZE } from "../main.js";

export class GameObject {
  constructor({ game, sprite, position, scale }) {
    this.game = game;
    this.sprite = sprite ?? { x, y, width, height, image };
    this.position = position;
    this.scale = scale;
  }

  draw(ctx) {
    ctx.fillRect(0 * TILE_SIZE, 0 * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}
