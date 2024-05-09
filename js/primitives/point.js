class Point {
  /**
   *
   * @param {int} x
   * @param {int} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /**
   * Draws a circle at `this.x` and `this.y` cords on ctx using specified size and color
   * @param {CanvasRenderingContext2D} ctx the context to draw on
   * @param {int} size the diameter of the circle
   * @param {string | CanvasGradient | CanvasPattern} color the color of the circle
   */
  draw(ctx, size = 18, color = "black") {
    const rad = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
    ctx.fill();
  }
}
