export class SelectController implements ng.IComponentController {
    constructor() {}

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
    public indexInstance = SelectController.index++;

    public getItem(item) {
        if (this.modelField) {
            return item[this.modelField];
        } else {
            return item;
        }
    }

    public changed() {
        this.choosed({ $item: this.ngModel});
    }

    public getLabel(item) {
        if (this.labelField) {
            return item[this.labelField];
        } else {
            return item;
        }
    }
}

SelectController.$inject = [];

export default SelectController;