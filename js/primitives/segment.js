class Segment {
  /**
   *
   * @param {Point} p1
   * @param {Point} p2
   */
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  equals(seg) {
    return this.includes(seg.p1) && this.includes(seg.p2);
  }
  includes(point) {
    return this.p1.equals(point) || this.p2.equals(point);
  }
  /**
   * Draws a line from `this.p1` to `this.p2`
   * @param {CanvasRenderingContext2D} ctx the context to draw on
   * @param {int} width width of the line
   * @param {string | CanvasGradient | CanvasPattern} color color of the line
   */
  draw(ctx, { width = 2, color = "black", dash = [] } = {}) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.setLineDash(dash);
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}
