define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.NAME = 'btModalService';
    var ModalService = (function () {
        function ModalService() {
            this.modals = [];
        }
        ModalService.prototype.showModal = function (config) {
            var modal = _(this.modals).find(function (m) { return m.url == config.url; });
            if (!modal || modal.multiple)
                this.modals.push(config);
        };
        ModalService.prototype.closeModal = function (config) {
            _(this.modals).remove(function (m) { return m == config; }).commit();
        };
        return ModalService;
    }());
    exports.ModalService = ModalService;
    ModalService.$inject = [];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        service: ModalService
    };
});
//# sourceMappingURL=modal.service.js.map