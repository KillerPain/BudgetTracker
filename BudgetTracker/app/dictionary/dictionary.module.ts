import DictionaryComponent from './dictionary.component';

let mdl = angular.module('app.dictionaries', []);

mdl.component(DictionaryComponent.name, DictionaryComponent.component);

export default mdl.name;