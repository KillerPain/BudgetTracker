define(["require", "exports"], function (require, exports) {
    "use strict";
    var DonutController = (function () {
        function DonutController($element) {
            this.$element = $element;
        }
        DonutController.prototype.$onInit = function () {
            this.stroke = this.stroke || '#fff';
            this.strokeFill = this.strokeFill || '#f00';
            this.progress = this.progress || 0;
            this.strokeWidth = this.strokeWidth || 20;
            this.r = 65;
            this.cx = this.strokeWidth + this.r;
            this.cy = this.cx;
            this.calculate();
            this.draw();
        };
        DonutController.prototype.draw = function () {
            var x = this.cx - this.r;
            var y = this.cy;
            var arc = 0;
            if (this.progress > 50)
                arc = 1;
            var svg = "<svg style=\"width: " + (this.r * 2 + this.strokeWidth * 2) + "; height: " + (this.r * 2 + this.strokeWidth * 2) + ";\">\n            <circle cx=\"" + this.cx + "\" cy=\"" + this.cy + "\" r=\"" + this.r + "\" style=\"stroke: " + this.stroke + "; stroke-width: " + this.strokeWidth + "; fill: none\"></circle>\n            <path d=\"M" + x + " " + y + " A " + this.r + " " + this.r + " 0 " + arc + " 1 " + this.x + " " + this.y + "\" style=\"stroke: " + this.strokeFill + "; stroke-linecap: round;  stroke-width: " + this.strokeWidth + "; fill: none\"></path>\n            <text x=\"" + this.cx + "\" y=\"" + this.cy + "\" text-anchor=\"middle\" alignment-baseline=\"middle\" fill=\"#fff\" font-size=\"40\">" + this.progress + "%</text>\n        </svg>";
            this.$element.append(svg);
        };
        DonutController.prototype.calculate = function () {
            var a = 2 * Math.PI * (this.progress / 100);
            var x = this.cx - this.r;
            var y = this.cy;
            var vx = x - this.cx;
            var vy = y - this.cy;
            this.x = vx * Math.cos(a) - vy * Math.sin(a);
            this.y = vx * Math.sin(a) + vy * Math.cos(a);
            this.x += this.cx;
            this.y += this.cy;
        };
        return DonutController;
    }());
    exports.DonutController = DonutController;
    DonutController.$inject = ['$element'];
    exports.NAME = 'btChartDonut';
    exports.COMPONENT = {
        bindings: {
            stroke: '<',
            strokeFill: '<',
            progress: '<'
        },
        controller: DonutController,
        template: ''
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        name: exports.NAME,
        component: exports.COMPONENT
    };
});
//# sourceMappingURL=donut-chart.component.js.map