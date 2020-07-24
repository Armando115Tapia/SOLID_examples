import { IDelete } from './interfaces/IDelete';
import { IRead } from './interfaces/IRead';
import { IUpdate } from './interfaces/IUpdate';
import { Iwrite } from './interfaces/IWrite';
export class Administrator implements IDelete, IRead, IUpdate, Iwrite {}
