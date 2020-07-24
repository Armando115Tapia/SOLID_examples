import { IRead } from './interfaces/IRead';
import { Iwrite } from './interfaces/IWrite';

export class TemporalEmployee implements IRead, Iwrite {
  read() {
    console.log('Temporal employe can see some information about');
  }
  write() {
    console.log('Temporal employe can write some information about');
  }
}
