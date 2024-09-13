export class Input {
  constructor() {
    this.keys = [];

    window.addEventListener("keydown", (e) => {
      console.log(e);
    });
    window.addEventListener("keyup", (e) => {
      console.log(e);
    });
  }
}
