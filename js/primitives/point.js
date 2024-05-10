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
   * Checks if a point is identical (same x,y) to this
   * @param {Point} point compares with `this`
   * @returns true if points are the same
   */
  equals(point) {
    return this.x == point.x && this.y == point.y;
  }

  /**
   * Draws a circle at `this.x` and `this.y` cords on ctx using specified size and color
   * @param {CanvasRenderingContext2D} ctx the context to draw on
   * @param {int} size the diameter of the circle
   * @param {string | CanvasGradient | CanvasPattern} color the color of the circle
   */
  draw(
    ctx,
    { size = 18, color = "black", outline = false, fill = false } = {}
  ) {
    const rad = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
    ctx.fill();
    if (outline) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "yellow";
      ctx.arc(this.x, this.y, rad * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (fill) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, rad * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
    }
  }
}
