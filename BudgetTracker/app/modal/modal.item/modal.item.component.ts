import {ModalItemController} from './modal.item.controller';

export const NAME: string = 'btModalItem';
export const COMPONENT: ng.IComponentOptions = {
    controller: ModalItemController,
    templateUrl: '/app/modal/modal.item/modal.item.template.html',
    bindings: {
        config: '<'
    }
}

export default {
    name: NAME,
    component: COMPONENT
}
