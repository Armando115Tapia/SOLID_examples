import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { calculateAreasOfMyShapes } from './calculateAreasOfMyShapes';

function app() {
  const myFirstCircle = new Circle(1);
  const mySecondCircle = new Circle(15);
  const myTrirdircle = new Circle(19);
  const myFourthCircle = new Circle(871);
  const myFirstRectangle = new Rectangle(14, 6);
  const mySecondRectangle = new Rectangle(8, 6);
  const myThyrdRectangle = new Rectangle(7, 3);
  const myShapes = [];
  myShapes.push(
    myFirstCircle,
    mySecondCircle,
    myTrirdircle,
    myFourthCircle,
    myFirstRectangle,
    mySecondRectangle,
    myThyrdRectangle
  );
  const myAreas = calculateAreasOfMyShapes(myShapes);
  console.log('myAreas: ', myAreas);
}

app();
