import { IShape } from './IShape';
export class Circle implements IShape {
  public radious: number;
  constructor(radious: number) {
    this.radious = radious;
  }
  getArea(): number {
    return this.radious * Math.pow(Math.PI, 2);
  }
}
