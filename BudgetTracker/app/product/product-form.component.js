define(["require", "exports", './product-form.controller', './../modal/modal.item/modal.item.component'], function (require, exports, product_form_controller_1, modal_item_component_1) {
    "use strict";
    exports.NAME = 'btProductForm';
    exports.COMPONENT = {
        controller: product_form_controller_1.default,
        templateUrl: '/app/product/product-form.template.html',
        bindings: {
            type: '<',
            model: '<',
            category: '<'
        },
        require: {
            modal: "^^" + modal_item_component_1.NAME
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=product-form.component.js.map