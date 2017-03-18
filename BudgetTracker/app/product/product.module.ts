import ProductForm from './product-form.component';

let mdl = angular.module('app.product', []);

mdl.component(ProductForm.name, ProductForm.component);

export default mdl.name;