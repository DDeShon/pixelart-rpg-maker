import { TILE_SIZE } from "../main.js";

export class GameObject {
  constructor({ game, sprite, position, scale }) {
    this.game = game;
    this.sprite = sprite ?? {
      x: 0,
      y: 0,
      width: TILE_SIZE,
      height: TILE_SIZE,
      image: "",
    };
    this.position = position ?? { x: 0, y: 0 };
    this.scale = scale ?? 1;

    this.destinationPosition = { x: this.position.x, y: this.position.y };
    this.distanceToTravel = { x: 0, y: 0 };
  }

  moveTowards(destinationPosition, speed) {}

  draw(ctx) {
    ctx.fillRect(
      this.position.x * TILE_SIZE,
      this.position.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }
}
