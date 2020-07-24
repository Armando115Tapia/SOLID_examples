import { IDelete } from './interfaces/IDelete';
import { IRead } from './interfaces/IRead';
import { IUpdate } from './interfaces/IUpdate';
import { Iwrite } from './interfaces/IWrite';
export class Administrator implements IDelete, IRead, IUpdate, Iwrite {
  read() {
    console.log(
      'Administrator can read all information, like:  salaries, sales, purchases'
    );
  }
  write() {
    console.log(
      'Administrator can write and generate new information inside the factory'
    );
  }
  update() {
    console.log('Administrator can update information inside the factory');
  }
  delete() {
    console.log('Administrator can delete inside the factory');
  }
}
