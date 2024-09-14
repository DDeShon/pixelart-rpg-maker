export class Input {
  constructor() {
    this.keys = [];

    window.addEventListener("keydown", (e) => {
      console.log("Pressed " + e.key);
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        this.keyPressed();
      }
    });
    window.addEventListener("keyup", (e) => {
      console.log("Released " + e.key);
    });
  }

  keyPressed() {}

  keyReleased() {}
}
