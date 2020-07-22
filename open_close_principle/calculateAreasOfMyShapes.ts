import { IShape } from './IShape';

export const calculateAreasOfMyShapes = (shapes: IShape[]) => {
  console.log('Aqui estoy');
  return shapes.reduce((acc, shap) => {
    return acc + shap.getArea();
  }, 0);
};
