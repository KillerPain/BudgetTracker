import CurrenciesComponent from './currencies.component';

let mdl = angular.module('app.currencies', []);

mdl.component(CurrenciesComponent.name, CurrenciesComponent.component);

export default mdl.name;