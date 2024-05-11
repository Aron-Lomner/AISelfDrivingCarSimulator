/**
 * Given an array of points and a location point, will find the point in the array which is nearest (Euclidean distance) the location point provided it is closer then the threshold. If no point is closer then the threshold will return null
 * @param {Point} loc finds the point nearest this location
 * @param {Point} points finds the point from this array which is nearest `loc`
 * @param {Number} threshold minimum distance a point needs to be
 * @returns {Point | null} will return the closest point or null if nearest is farther then threshold
 */
function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER) {
  let minDist = Number.MAX_SAFE_INTEGER;
  let nearest = null;
  for (const point of points) {
    const dist = distance(point, loc);
    if (dist < minDist && dist < threshold) {
      minDist = dist;
      nearest = point;
    }
  }
  return nearest;
}
/**
 * Calculates the Euclidean distance between two points
 * @param {Point} p1
 * @param {Point} p2
 * @returns Euclidean distance between p1 and p2
 */
function distance(p1, p2) {
  return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

function add(p1, p2) {
  return new Point(p1.x + p2.x, p1.y + p2.y);
}

function subtract(p1, p2) {
  return new Point(p1.x - p2.x, p1.y - p2.y);
}

function scale(p, scaler) {
  return new Point(p.x * scaler, p.y * scaler);
}
