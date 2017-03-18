import GraphController from './line-graph.controller';

export const NAME: string = 'btLineGraph';
export const COMPONENT: ng.IComponentOptions = {
    controller: GraphController,
    template: '',
    bindings: {
        coords: '<',
        onClicked: '&',
        delimeters: '<',
        captions: '<'
    }
}

export default {
    name: NAME,
    component: COMPONENT
}