define(["require", "exports", './../modal.service'], function (require, exports, modal_service_1) {
    "use strict";
    var ModalItemController = (function () {
        function ModalItemController(modalService) {
            this.modalService = modalService;
            console.log(this.config);
        }
        ModalItemController.prototype.close = function () {
            this.modalService.closeModal(this.config);
        };
        return ModalItemController;
    }());
    exports.ModalItemController = ModalItemController;
    ModalItemController.$inject = [modal_service_1.NAME];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ModalItemController;
});
//# sourceMappingURL=modal.item.controller.js.map