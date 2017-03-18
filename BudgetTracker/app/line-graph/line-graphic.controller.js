define(["require", "exports"], function (require, exports) {
    "use strict";
    var GraphicController = (function () {
        function GraphicController($element) {
            this.$element = $element;
        }
        GraphicController.prototype.$onInit = function () {
            this.draw();
        };
        GraphicController.prototype.draw = function () {
            var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\">\n            <path d=\"M0 0 L0 300 L100 300 L100 0 \n                  M100 300 L200 300 L200 0\n                  M200 300 L300 300 L300 0\n                  M300 300 L400 300 L400 0\n                  M400 300 L500 300 L500 0\n                  M500 300 L600 300 L600 0\n                  M600 300 L700 300 L700 0\n                  M700 300 L800 300 L800 0\" style=\"stroke:rgba(255, 255, 255, 0.5); stroke-width: 1px; fill: transparent\"></path>\n            <path d=\"M0 300 L0 50 L800 250 L800 300 Z\" fill=\"rgba(255, 255, 255, 0.1)\"></path>\n            <path d=\"M0 180 Q100 20, 200 300 Q200 300, 300 50 Q300 50, 400 70 L500 70 L600 200 L700 0 L800 250\" stroke=\"#f00\" stroke-width=\"10\" fill=\"none\" stroke-linecap=\"round\"></path>\n        </svg>";
            this.$element.append(svg);
        };
        return GraphicController;
    }());
    exports.GraphicController = GraphicController;
    GraphicController.$inject = ['$element'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GraphicController;
});
//# sourceMappingURL=line-graphic.controller.js.map