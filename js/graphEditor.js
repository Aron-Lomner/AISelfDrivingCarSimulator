class GraphEditor {
  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @param {Graph} graph
   */
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;

    this.ctx = canvas.getContext("2d");

    this.selected = null;
    this.hovered = null;
    this.dragging = false;
    this.mouse = null;

    this.#addEventListeners();
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));
    this.canvas.addEventListener("mousemove", this.#handleMouseMove.bind(this));
    this.canvas.addEventListener("contextmenu", (evt) => evt.preventDefault());
    this.canvas.addEventListener("mouseup", (evt) => (this.dragging = false));
  }

  #handleMouseMove(evt) {
    this.mouse = new Point(evt.offsetX, evt.offsetY);
    this.hovered = getNearestPoint(this.mouse, this.graph.points, 10);
    if (this.dragging) {
      this.selected.x = this.mouse.x;
      this.selected.y = this.mouse.y;
    }
  }

  #handleMouseDown(evt) {
    // Handle right clicked
    if (evt.button == 2) {
      //If we have a selected point then unselect it, if not then if we are hovering over a point then delete it
      if (this.selected) {
        this.selected = null;
      } else if (this.hovered) {
        this.#removePoint(this.hovered);
      }
    }
    // Handle left click
    if (evt.button == 0) {
      this.hovered = getNearestPoint(this.mouse, this.graph.points, 10);
      //If we are hovering over a point: create a new segment between selected and hovered point, if no selected point: select hovered point. Set this.dragging to true.
      if (this.hovered) {
        this.#select(this.hovered);
        this.dragging = true;
        return;
      }
      // If we were not hovering over a point: add a new point at this.mouse (current location), create a new segment between new point and selected point or select new point if none is selected, and set hovered to this.mouse
      this.graph.addPoint(this.mouse);
      this.#select(this.mouse);
      this.hovered = this.mouse;
    }
  }

  /**
   * Attempts to add segment between provided and selected point (if there is selected point). Then selects provided point.
   * @param {Point} point - Will attempt to add segment between this point and `this.selected`, then will select this point.
   */
  #select(point) {
    if (this.selected) {
      this.graph.tryAddSegment(new Segment(this.selected, point));
    }
    this.selected = point;
  }

  #removePoint(point) {
    this.graph.removePoint(point);
    this.hovered = null;
    if (this.selected == point) {
      this.selected = null;
    }
  }

  display() {
    this.graph.draw(this.ctx);
    if (this.selected) {
      const intent = this.hovered || this.mouse;
      new Segment(this.selected, intent).draw(ctx, { dash: [3, 3] });
      this.selected.draw(this.ctx, { outline: true });
    }
    if (this.hovered) {
      this.hovered.draw(this.ctx, { fill: true });
    }
  }
}
