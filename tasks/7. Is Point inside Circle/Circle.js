import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // find distance between center and point
      // sqrt( (x2 - x1)^2 + (y2-y1)^2 )
      let targetX = Point.x;
      let targetY = Point.y;
      let circleX = center.x;
      let circleY = center.y;

      let dist = Math.sqrt( 
        Math.pow( (targetX-circleX), 2) + Math.pow( (targetY-circleY), 2) 
      );

      return dist <= radius;
    }
  }
}
