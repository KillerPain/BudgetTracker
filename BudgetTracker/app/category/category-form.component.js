define(["require", "exports", './category-form.controller'], function (require, exports, category_form_controller_1) {
    "use strict";
    exports.NAME = 'btCategoryForm';
    exports.COMPONENT = {
        controller: category_form_controller_1.default,
        templateUrl: '/app/category/category-form.template.html',
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
//# sourceMappingURL=category-form.component.js.map