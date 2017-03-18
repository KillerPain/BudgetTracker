import {DictionaryController} from './dictionary.controller';
export const NAME: string = "btDictionary";
export const COMPONENT: ng.IComponentOptions = {
    controller: DictionaryController,
    templateUrl: '/app/dictionary/dictionary.template.html'
}
export default {
    name: NAME,
    component: COMPONENT
}