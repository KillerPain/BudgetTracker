import SelectController from './select.controller';

export const NAME: string = 'btSelect';
export const COMPONENT: ng.IComponentOptions = {
    controller: SelectController,
    templateUrl: '/app/inputs/select/select.template.html',
    bindings: {
        hasButton: '<',
        buttonClick: '&',
        buttonIcon: '<',
        choosed: '&',
        items: '<',
        label: '<',
        ngModel: '=',
        modelField: '<',
        labelField: '<',
        nullText: '<'
    },
    require: {
        form: '^^?btInput'
    } 
}

export default {
    name: NAME,
    component: COMPONENT
}