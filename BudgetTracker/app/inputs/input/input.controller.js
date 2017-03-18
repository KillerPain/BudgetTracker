define(["require", "exports"], function (require, exports) {
    "use strict";
    var ButtonController = (function () {
        function ButtonController() {
            this.indexInstance = ButtonController.index++;
        }
        ButtonController.prototype.getItem = function (item) {
            if (this.modelField) {
                return item[this.modelField];
            }
            else {
                return item;
            }
        };
        ButtonController.prototype.changed = function () {
            this.choosed({ $item: this.ngModel });
            console.log(this.ngModel);
        };
        ButtonController.prototype.getLabel = function (item) {
            if (this.labelField) {
                return item[this.labelField];
            }
            else {
                return item;
            }
        };
        ButtonController.index = 0;
        return ButtonController;
    }());
    exports.ButtonController = ButtonController;
    ButtonController.$inject = [];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ButtonController;
});
//# sourceMappingURL=input.controller.js.map