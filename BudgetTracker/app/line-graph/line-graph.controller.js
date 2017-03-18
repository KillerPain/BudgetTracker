define(["require", "exports"], function (require, exports) {
    "use strict";
    var GraphController = (function () {
        function GraphController($element, $compile, $scope) {
            this.$element = $element;
            this.$compile = $compile;
            this.$scope = $scope;
            this.chartId = GraphController.CHART_ID++;
            this.rects = [];
        }
        GraphController.prototype.$onInit = function () {
            this.delimeters = this.delimeters || this.coords.length - 1;
            this.width = 720 / this.delimeters;
            this.draw();
        };
        GraphController.prototype.$onChanges = function (obj) {
            if (obj.coords && !obj.coords.isFirstChange()) {
                this.draw();
            }
            if (obj.captions && !obj.captions.isFirstChange()) {
                this.draw();
            }
            if (obj.delimeters && !obj.delimeters.isFirstChange()) {
                this.draw();
            }
        };
        GraphController.prototype.getLinePathCoords = function () {
            var _this = this;
            var str = "";
            this.coords.forEach(function (y, i) {
                if (i > 0 && i < _this.coords.length - 1) {
                    var p = [i * _this.width + _this.width / 2, y];
                    var p1 = [(i - 1) * _this.width + _this.width / 2, _this.coords[i - 1]];
                    var p2 = [(i + 1) * _this.width + _this.width / 2, _this.coords[i + 1]];
                    var cp1 = [(p1[0] + p[0]) / 2, (p1[1] + p[1]) / 2];
                    var cp2 = [(p2[0] + p[0]) / 2, (p2[1] + p[1]) / 2];
                    str += " Q" + (i * _this.width + _this.width / 2) + " " + y + ", " + cp2[0] + " " + cp2[1];
                }
            });
            str += "L" + ((this.coords.length - 1) * this.width + this.width / 2) + " " + this.coords[this.coords.length - 1];
            return str;
        };
        GraphController.prototype.mouseenter = function (index) {
            this.$element.find("#rect-" + this.chartId + "-" + index).attr({
                fill: 'rgba(255, 255, 255, 0.1)'
            });
        };
        GraphController.prototype.mouseout = function (index) {
            this.$element.find("#rect-" + this.chartId + "-" + index).attr({
                fill: 'rgba(255, 255, 255, 0)'
            });
        };
        GraphController.prototype.clicked = function (index) {
            this.onClicked({ $rect: index });
        };
        GraphController.prototype.draw = function () {
            var _this = this;
            var d = "";
            for (var i = 0; i < this.delimeters; i++) {
                d += "M" + i * this.width + " 0 L" + i * this.width + " 300 L" + (i + 1) * this.width + " 300 L" + (i + 1) * this.width + " 0";
            }
            var coordsSystem = "<path d=\"" + d + "\" style=\"stroke: rgba(255, 255, 255, 0.5); stroke - width: 1px; fill: transparent\"></path>";
            var lineGradient = "<path d=\"M0 300 L0 " + this.coords[0] + " " + this.getLinePathCoords() + " L" + ((this.coords.length - 1) * this.width + this.width / 2) + " 300\" fill=\"rgba(255, 255, 255, 0.1)\"></path>";
            var linePath = "<path d=\"M0 " + this.coords[0] + " " + this.getLinePathCoords() + "\" filter=\"url(#shadow)\" stroke=\"#f00\" stroke-width=\"10\" fill=\"none\" stroke-linecap=\"round\"></path>";
            for (var i = 0; i < this.delimeters; i++) {
                this.rects.push("<rect x=\"" + i * this.width + "\" y=\"0\" width=\"" + this.width + "\" height=\"300\" fill=\"rgba(255, 255, 255, 0)\" id=\"rect-" + this.chartId + "-" + i + "\"\n                                    style=\"transition: all 300ms ease; cursor: pointer\" \n                                    ng-mouseenter=\"$ctrl.mouseenter(" + i + ")\" ng-mouseleave=\"$ctrl.mouseout(" + i + ")\" ng-click='$ctrl.clicked(" + i + ")'/>");
            }
            var rectStr = this.rects.join('\n');
            var captionsStr = "";
            if (this.captions) {
                this.captions.forEach(function (caption, i) {
                    captionsStr += "<text x=\"" + _this.width * i + "\" y=\"320\">" + caption + "</text>";
                });
            }
            var captions = "<g>" + captionsStr + "</g>";
            var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"730\" height=\"320\">\n            <defs>\n                <filter id=\"shadow\">\n                    <feOffset result=\"offOut\" in=\"SourceAlpha\" dy=\"10\" />\n                    <feGaussianBlur result=\"blurOut\" in=\"offOut\" stdDeviation=\"5\" />\n                    <feBlend in=\"SourceGraphic\" in2=\"blurOut\" mode=\"normal\" />\n                </filter>\n            </defs>\n            " + coordsSystem + "\n            " + linePath + "\n            " + lineGradient + "\n            <g>" + rectStr + "</g>\n            " + captions + ";\n        </svg>";
            this.$element.html('');
            var e = this.$compile(svg)(this.$scope);
            this.$element.append(e);
        };
        GraphController.CHART_ID = 0;
        return GraphController;
    }());
    exports.GraphController = GraphController;
    GraphController.$inject = ['$element', '$compile', '$scope'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GraphController;
});
//# sourceMappingURL=line-graph.controller.js.map