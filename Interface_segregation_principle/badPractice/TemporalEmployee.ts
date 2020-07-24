import { IModifyInformation } from './interfaces/IModifyInformation';

export class TemporalEmployee implements IModifyInformation {
  read() {
    console.log('Temporal employe can see some information about');
  }
  write() {
    console.log('Temporal employe can write some information about');
  }
  update() {
    throw new Error('Temporal employe can not update');
  }
  delete() {
    throw new Error('Temporal employe can not delete');
  }
}
