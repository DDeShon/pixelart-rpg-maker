const LEFT = "LEFT";
const RIGHT = "RIGHT";
const UP = "UP";
const DOWN = "DOWN";

export class Input {
  constructor() {
    this.keys = [];
    console.log(this.keys);

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        this.keyPressed(UP);
      } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        this.keyPressed(DOWN);
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        this.keyPressed(LEFT);
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        this.keyPressed(RIGHT);
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        this.keyReleased(UP);
      } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        this.keyReleased(DOWN);
      } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        this.keyReleased(LEFT);
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        this.keyReleased(RIGHT);
      }
    });
  }

  keyPressed(key) {
    if (this.keys.indexOf(key) === -1) {
      this.keys.unshift(key);
    }
    console.log(key, this.keys);
  }

  keyReleased(key) {
    const index = this.keys.indexOf(key);
    this.keys.splice(index, 1);
    console.log(this.keys);
  }

  keyReleased() {}
}
