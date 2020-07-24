import { Administrator } from './Administrator';
import { TemporalEmployee } from './TemporalEmployee';

const app = () => {
  const admin = new Administrator();
  const tempEmployee = new TemporalEmployee();
  tempEmployee.delete();
};

app();
