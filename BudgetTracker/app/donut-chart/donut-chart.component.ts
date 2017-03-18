export class DonutController {
    constructor(private $element: ng.IRootElementService) { }

    public stroke: string;
    public strokeFill: string;
    public progress: number;
    public strokeWidth: number;

    public x: number;
    public y: number;

    public r: number;
    public cx: number;
    public cy: number;
    

    public $onInit() {
        this.stroke = this.stroke || '#fff';
        this.strokeFill = this.strokeFill || '#f00';
        this.progress = this.progress || 0;
        this.strokeWidth = this.strokeWidth || 20;

        this.r = 65;
        this.cx = this.strokeWidth + this.r;
        this.cy = this.cx;

        this.calculate();
        this.draw();
    }

    public draw() {
        let x = this.cx - this.r;
        let y = this.cy;
        
        let arc = 0;
        if (this.progress > 50) arc = 1;

        let svg = `<svg style="width: ${this.r * 2 + this.strokeWidth * 2}; height: ${this.r * 2 + this.strokeWidth * 2};">
            <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" style="stroke: ${this.stroke}; stroke-width: ${this.strokeWidth}; fill: none"></circle>
            <path d="M${x} ${y} A ${this.r} ${this.r} 0 ${arc} 1 ${this.x} ${this.y}" style="stroke: ${this.strokeFill}; stroke-linecap: round;  stroke-width: ${this.strokeWidth}; fill: none"></path>
            <text x="${this.cx}" y="${this.cy}" text-anchor="middle" alignment-baseline="middle" fill="#fff" font-size="40">${this.progress}%</text>
        </svg>`;
        this.$element.append(svg);

    }

    public calculate() {
        let a = 2 * Math.PI * (this.progress / 100);
        let x = this.cx - this.r;
        let y = this.cy;

        let vx = x - this.cx;
        let vy = y - this.cy;

        this.x = vx * Math.cos(a) - vy * Math.sin(a);
        this.y = vx * Math.sin(a) + vy * Math.cos(a);
        this.x += this.cx;
        this.y += this.cy;
    }

    //V2.x = V1.x * cos(a) - V1.y * sin(a);
    //V2.y = V1.x * sin(a) + V1.y * cos(a);

}

DonutController.$inject = ['$element'];

export const NAME: string = 'btChartDonut';
export const COMPONENT: ng.IComponentOptions = {
    bindings: {
        stroke: '<',
        strokeFill: '<',
        progress: '<'
    },
    controller: DonutController,
    template: ''
}

export default {
    name: NAME,
    component: COMPONENT
}