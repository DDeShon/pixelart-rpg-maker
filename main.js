const TILE_SIZE = 32;
const COLS = 15;
const ROWS = 20;
const GAME_WIDTH = TILE_SIZE * COLS;
const GAME_HEIGHT = TILE_SIZE * ROWS;

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;

  function drawGrid() {
    ctx.fillRect(10, 20, 50, 100);
  }
  drawGrid();
});
