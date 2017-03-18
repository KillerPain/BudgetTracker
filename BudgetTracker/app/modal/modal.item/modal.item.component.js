define(["require", "exports", './modal.item.controller'], function (require, exports, modal_item_controller_1) {
    "use strict";
    exports.NAME = 'btModalItem';
    exports.COMPONENT = {
        controller: modal_item_controller_1.ModalItemController,
        templateUrl: '/app/modal/modal.item/modal.item.template.html',
        bindings: {
            config: '<'
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=modal.item.component.js.map