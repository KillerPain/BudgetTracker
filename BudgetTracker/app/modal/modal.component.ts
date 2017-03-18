import {ModalController} from './modal.controller';

export const NAME: string = 'btModal';
export const COMPONENT: ng.IComponentOptions = {
    controller: ModalController,
    templateUrl: '/app/modal/modal.template.html',
}

export default {
    name: NAME,
    component: COMPONENT
}
