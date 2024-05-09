class Segment {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  /**
   * Draws a line from `this.p1` to `this.p2`
   * @param {CanvasRenderingContext2D} ctx the context to draw on
   * @param {int} width width of the line
   * @param {string} color color of the line
   */
  draw(ctx, width = 2, color = "black") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
}
