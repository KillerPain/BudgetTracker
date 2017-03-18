import CategoryFormController from './category-form.controller';

export const NAME: string = 'btCategoryForm';
export const COMPONENT: ng.IComponentOptions = {
    controller: CategoryFormController,
    templateUrl: '/app/category/category-form.template.html',
    bindings: {
        type: '<',
        model: '<'
    }
}


export default {
    name: NAME,
    component: COMPONENT
}