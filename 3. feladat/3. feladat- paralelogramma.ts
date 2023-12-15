class ParallelogramCalculator {
  calculateAreaWithHeight(base: number, height: number): number {
    return base * height;
  }

  calculateAreaWithAngle(side1: number, side2: number, angle: number): number {
    const radians = (angle * Math.PI) / 180;
    return side1 * side2 * Math.sin(radians);
  }
}

const parallelogramCalculator = new ParallelogramCalculator();

// Példa értékekkel
const baseLength = 4;
const height = 2.078;
const side1Length = 4;
const side2Length = 2.4;
const angle = 120;

console.log(parallelogramCalculator.calculateAreaWithAngle(side1Length, side2Length, angle));
console.log(parallelogramCalculator.calculateAreaWithHeight(baseLength, height));


