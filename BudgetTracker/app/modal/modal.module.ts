import ModalComponent from './modal.component';
import ModalItemComponent from './modal.item/modal.item.component';
import ModalService from './modal.service';


let mdl = angular.module('app.modal', []);

mdl.component(ModalComponent.name, ModalComponent.component);
mdl.component(ModalItemComponent.name, ModalItemComponent.component);

mdl.service(ModalService.name, ModalService.service);

export default mdl.name;