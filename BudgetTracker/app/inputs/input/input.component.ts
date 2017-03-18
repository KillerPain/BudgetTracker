import ButtonController from './input.controller';

export const NAME: string = 'btInput';
export const COMPONENT: ng.IComponentOptions = {
    controller: ButtonController,
    templateUrl: '/app/inputs/input/input.template.html',
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
        type: '<'
    }    
}

export default {
    name: NAME,
    component: COMPONENT
}