define(["require", "exports", './modal.component', './modal.item/modal.item.component', './modal.service'], function (require, exports, modal_component_1, modal_item_component_1, modal_service_1) {
    "use strict";
    var mdl = angular.module('app.modal', []);
    mdl.component(modal_component_1.default.name, modal_component_1.default.component);
    mdl.component(modal_item_component_1.default.name, modal_item_component_1.default.component);
    mdl.service(modal_service_1.default.name, modal_service_1.default.service);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = mdl.name;
});
//# sourceMappingURL=modal.module.js.map