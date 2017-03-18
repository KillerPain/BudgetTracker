interface IOnchangesObject extends ng.IOnChangesObject {
    captions: ng.IChangesObject<string[]>;
    coords: ng.IChangesObject<number[]>;
    delimeters: ng.IChangesObject<number>;
}

export class GraphController {
    constructor(private $element: ng.IRootElementService, private $compile: ng.ICompileService, private $scope: ng.IScope) { }

    public $onInit() {
        this.delimeters = this.delimeters || this.coords.length - 1;
        this.width = 720 / this.delimeters
        this.draw();
    }

    public $onChanges(obj: IOnchangesObject) {
        if (obj.coords && !obj.coords.isFirstChange()) {
            this.draw();
        }
        if (obj.captions && !obj.captions.isFirstChange()) {
            this.draw();
        }
        if (obj.delimeters && !obj.delimeters.isFirstChange()) {
            this.draw();
        }
    }

    public static CHART_ID = 0;

    public chartId = GraphController.CHART_ID++;
    
    public coords: number[];
    public captions: string[];
    public onClicked: Function;
    public delimeters: number;
    public width: number;

    public getLinePathCoords() {
        let str = "";
        this.coords.forEach((y, i) => {
            if (i > 0 && i < this.coords.length - 1) {
                let p = [i * this.width + this.width / 2, y];
                let p1 = [(i - 1) * this.width + this.width / 2, this.coords[i - 1]];
                let p2 = [(i + 1) * this.width + this.width / 2, this.coords[i + 1]];
                let cp1 = [(p1[0] + p[0]) / 2, (p1[1] + p[1]) / 2];
                let cp2 = [(p2[0] + p[0]) / 2, (p2[1] + p[1]) / 2];
                str += ` Q${i * this.width + this.width / 2} ${y}, ${cp2[0]} ${cp2[1]}`
            }
        });
        str += `L${(this.coords.length - 1) * this.width + this.width / 2} ${this.coords[this.coords.length - 1]}`;
        return str;
    }

    public rects = [];

    public mouseenter(index: string) {
        this.$element.find(`#rect-${this.chartId}-${index}`).attr({
            fill: 'rgba(255, 255, 255, 0.1)'
        });
    }

    public mouseout(index: string) {
        this.$element.find(`#rect-${this.chartId}-${index}`).attr({
            fill: 'rgba(255, 255, 255, 0)'
        });
    }

    public clicked(index) {
        this.onClicked({ $rect: index });
    }

    public draw() {

        let d = ""

        for (let i = 0; i < this.delimeters; i++) {
            d += `M${i * this.width} 0 L${i * this.width} 300 L${(i + 1) * this.width} 300 L${(i + 1) * this.width} 0`
        }

        let coordsSystem = `<path d="${d}" style="stroke: rgba(255, 255, 255, 0.5); stroke - width: 1px; fill: transparent"></path>`;

        let lineGradient = `<path d="M0 300 L0 ${this.coords[0]} ${this.getLinePathCoords()} L${(this.coords.length - 1) * this.width + this.width / 2} 300" fill="rgba(255, 255, 255, 0.1)"></path>`;
        let linePath = `<path d="M0 ${this.coords[0]} ${this.getLinePathCoords()}" filter="url(#shadow)" stroke="#f00" stroke-width="10" fill="none" stroke-linecap="round"></path>`

        for (let i = 0; i < this.delimeters; i++) {
            this.rects.push(`<rect x="${i * this.width}" y="0" width="${this.width}" height="300" fill="rgba(255, 255, 255, 0)" id="rect-${this.chartId}-${i}"
                                    style="transition: all 300ms ease; cursor: pointer" 
                                    ng-mouseenter="$ctrl.mouseenter(${i})" ng-mouseleave="$ctrl.mouseout(${i})" ng-click='$ctrl.clicked(${i})'/>`);
        }

        let rectStr = this.rects.join('\n');

        let captionsStr = ``;
        if (this.captions) {
            this.captions.forEach((caption, i) => {
                captionsStr += `<text x="${this.width * i}" y="320">${caption}</text>`
            });
        }
        let captions = `<g>${captionsStr}</g>`;


        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="730" height="320">
            <defs>
                <filter id="shadow">
                    <feOffset result="offOut" in="SourceAlpha" dy="10" />
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
            </defs>
            ${coordsSystem}
            ${linePath}
            ${lineGradient}
            <g>${rectStr}</g>
            ${captions};
        </svg>`;

        this.$element.html('');
        let e = this.$compile(svg)(this.$scope);
        this.$element.append(e);
    }   
}

GraphController.$inject = ['$element', '$compile', '$scope'];

export default GraphController;