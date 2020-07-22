import { IShape } from './IShape';

export class Rectangle implements IShape {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.width * this.width;
  }
}
