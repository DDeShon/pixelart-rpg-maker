const LEFT = "LEFT";
const RIGHT = "RIGHT";
const UP = "UP";
const DOWN = "DOWN";

export class Input {
  constructor() {
    this.keys = [];

    window.addEventListener("keydown", (e) => {
      console.log("Pressed " + e.key);
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        this.keyPressed(UP);
      }
    });
    window.addEventListener("keyup", (e) => {
      console.log("Released " + e.key);
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        this.keyReleased(UP);
      }
    });
  }

  keyPressed() {}

  keyReleased() {}
}
