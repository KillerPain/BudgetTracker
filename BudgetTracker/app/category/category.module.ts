import CategoryForm from './category-form.component';

let mdl = angular.module('app.category', []);
mdl.component(CategoryForm.name, CategoryForm.component);

export default mdl.name;