export class ButtonController {
    constructor() { }

    public hasButton: boolean;
    public buttonClick: Function;
    public buttonIcon: string;
    public choosed: Function;
    public items: any[];
    public label: string;
    public ngModel: any;
    public modelField: string;
    public labelField: string;

    static index = 0;
    public indexInstance = ButtonController.index++;

    public getItem(item) {
        if (this.modelField) {
            return item[this.modelField];
        } else {
            return item;
        }
    }

    public changed() {
        this.choosed({ $item: this.ngModel });
        console.log(this.ngModel);
    }

    public getLabel(item) {
        if (this.labelField) {
            return item[this.labelField];
        } else {
            return item;
        }
    }

    
}

ButtonController.$inject = [];

export default ButtonController;