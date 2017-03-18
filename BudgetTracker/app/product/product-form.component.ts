import ProductFormController from './product-form.controller';
import {NAME as TransactionFormComponent} from './../transactions/transaction-form/transaction-form.component';
import {NAME as ModalItem} from './../modal/modal.item/modal.item.component';

export const NAME: string = 'btProductForm';
export const COMPONENT: ng.IComponentOptions = {
    controller: ProductFormController,
    templateUrl: '/app/product/product-form.template.html',
    bindings: {
        type: '<',
        model: '<',
        category: '<'
    },
    require: {
        modal: `^^${ModalItem}`
    }
}

export default {
    name: NAME,
    component: COMPONENT
}