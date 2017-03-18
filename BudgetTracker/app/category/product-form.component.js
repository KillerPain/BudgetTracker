define(["require", "exports", './product-form.controller'], function (require, exports, product_form_controller_1) {
    "use strict";
    exports.NAME = 'btCategoryForm';
    exports.COMPONENT = {
        controller: product_form_controller_1.default,
        templateUrl: '/app/product/product-form.template.html',
        bindings: {
            type: '<',
            model: '<'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=product-form.component.js.map