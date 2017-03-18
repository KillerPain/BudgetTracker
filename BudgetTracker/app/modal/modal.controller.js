define(["require", "exports", './modal.service'], function (require, exports, modal_service_1) {
    "use strict";
    var ModalController = (function () {
        function ModalController(modalService) {
            this.modalService = modalService;
            this.lastDeleted = 0;
        }
        ModalController.prototype.getModals = function () {
            return this.modalService.modals;
        };
        ModalController.prototype.closeModals = function (deletion) {
            var modals = this.getModals();
            for (var i = modals.length - 1; i >= 0; i--) {
                if (modals[i].closeOnOverlayClick && deletion != this.lastDeleted)
                    continue;
                this.modalService.closeModal(modals[i]);
                this.lastDeleted++;
                this.closeModals(deletion);
                return;
            }
        };
        ModalController.prototype.close = function () {
            //this.closeModals(this.lastDeleted);
            //this.modalService.modals = [];
            var modals = this.getModals();
            this.modalService.closeModal(_(modals).last());
        };
        return ModalController;
    }());
    exports.ModalController = ModalController;
    ModalController.$inject = [modal_service_1.NAME];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ModalController;
});
//# sourceMappingURL=modal.controller.js.map