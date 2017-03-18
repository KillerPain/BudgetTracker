import Select from './select/select.component';
import Input from './input/input.component';

let mdl = angular.module('app.inputs', []);

mdl.component(Select.name, Select.component);
mdl.component(Input.name, Input.component);

export default mdl.name;