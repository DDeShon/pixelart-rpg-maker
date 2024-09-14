export class Input {
  constructor() {
    this.keys = [];

    window.addEventListener("keydown", (e) => {
      console.log("Pressed " + e.key);
    });
    window.addEventListener("keyup", (e) => {
      console.log("Released " + e.key);
    });
  }
}
