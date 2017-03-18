import {CurrenciesController} from './currencies.controller';

export const NAME: string = 'btCurrencies';
export const COMPONENT: ng.IComponentOptions = {
    controller: CurrenciesController,
    templateUrl: '/app/currency/currencies.template.html'
}

export default {
    name: NAME,
    component: COMPONENT
}