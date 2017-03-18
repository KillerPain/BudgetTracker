define(["require", "exports"], function (require, exports) {
    "use strict";
    var Controller = (function () {
        function Controller(service) {
            this.service = service;
        }
        Controller.prototype.add = function () {
            this.service.add(this.model);
        };
        Controller.prototype.get = function (id) {
            var _this = this;
            var params = null;
            if (id)
                params = { id: id };
            this.service.get(params).$promise.then(function (r) {
                _this.data = r;
            });
        };
        return Controller;
    }());
    Controller.$inject = ['testService'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Controller;
});
//# sourceMappingURL=controller.js.map