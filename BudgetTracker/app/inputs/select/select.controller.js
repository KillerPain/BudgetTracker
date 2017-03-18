define(["require", "exports"], function (require, exports) {
    "use strict";
    var SelectController = (function () {
        function SelectController() {
            this.indexInstance = SelectController.index++;
        }
        SelectController.prototype.getItem = function (item) {
            if (this.modelField) {
                return item[this.modelField];
            }
            else {
                return item;
            }
        };
        SelectController.prototype.changed = function () {
            this.choosed({ $item: this.ngModel });
        };
        SelectController.prototype.getLabel = function (item) {
            if (this.labelField) {
                return item[this.labelField];
            }
            else {
                return item;
            }
        };
        SelectController.index = 0;
        return SelectController;
    }());
    exports.SelectController = SelectController;
    SelectController.$inject = [];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SelectController;
});
//# sourceMappingURL=select.controller.js.map