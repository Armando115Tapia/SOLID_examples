import { IModifyInformation } from './interfaces/IModifyInformation';

export class Administrator implements IModifyInformation {
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
