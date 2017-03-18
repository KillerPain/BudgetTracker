import {ModalService, NAME as ModalService_NAME} from './../modal/modal.service';
import {Repositories, NAME as Repositories_NAME} from './../repositories.service';

export enum Types {
    Today,
    Week,
    Month,
    Year
}

export class TransactionsController implements ng.IComponentOptions {
    constructor(private modalService: ModalService, private repos: Repositories, private $stateParams: any, private $scope: ng.IScope) { }

    private type: Types = Types.Today;

    private watcher: any;

    private delimeters: number;

    public $onInit() {
        this.captions = [];
        for (let i = 0; i < 11; i++) {
            this.captions.push(new Date(2016, i, 1).getMonth().toString());
        }

        this.$stateParams.type = (<string>this.$stateParams.type).toLowerCase();

        if (this.$stateParams.type == "today") {
            this.type = Types.Today;
        } else if (this.$stateParams.type == "week") {
            this.type = Types.Week;
        } else if (this.$stateParams.type == "month") {
            this.type = Types.Month;
        } else if (this.$stateParams.type == "year") {
            this.type = Types.Year;
        }

        this.loadData();

    }

    

    private loadYear() {
        let date = moment(new Date).date(1);
        this.captions = [];
        this.delimeters = 12;
        for (let i = 0; i < 12; i++) {
            date.month(i);
            this.captions.push(date.format('MMM'))
        }
        this.coords = this.fillCoords(this.delimeters);
        let first = date.clone().month(0);
        let last = date.clone().month(0).add(1, 'years');
        let promise = this.repos.transactionRepo.query({
            $filter: `TransactionDate ge DateTime'${first.format()}' and TransactionDate lt DateTime'${last.format()}'`
        });

        promise.$promise.then(transactions => {
            transactions.forEach(transaction => {
                let date = moment(transaction.TransactionDate);
                let index = date.month();
                this.coords[index] += transaction.Amount;
            });
            this.prepareCoords();
        })
    }
    private loadMonth() {
        let date = moment(new Date());
        let first = date.clone().date(1).hour(0).minute(0).second(0);
        let last = first.clone().add(date.daysInMonth(), 'days');
        this.delimeters = Math.ceil(date.daysInMonth() / 3);
        this.captions = [];
        let day = 1;
        for (let i = 0; i < this.delimeters; i++) {
            this.captions.push(day.toString());
            day += 3;
        }
        this.coords = this.fillCoords(this.delimeters);
        

        let promise = this.repos.transactionRepo.query({
            $filter: `TransactionDate ge DateTime'${first.format()}' and TransactionDate lt DateTime'${last.format()}'`
        });
        promise.$promise.then(transactions => {
            transactions.forEach(transaction => {
                let date = moment(transaction.TransactionDate);
                let index = Math.ceil(date.date() / 3) - 1;
                this.coords[index] += transaction.Amount;
            });
            this.prepareCoords();
        });
    }

    private fillCoords(len: number, x?: number) {
        let a = [];
        for (let i = 0; i < len; i++) {
            a.push(x || 0);
        }
        return a;
    }

    private loadWeek() {
        let date = moment(new Date());
        let monday = date.day(1).hour(0).minute(0).second(0);
        let sunday = monday.clone().add(6, 'days');

        let a = this.repos.transactionRepo.query({
            $filter: `TransactionDate ge DateTime'${monday.format()}' and TransactionDate le DateTime'${sunday.format()}'`
        });
        this.captions = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.delimeters = 7;
        a.$promise.then(transactions => {
            this.coords = this.fillCoords(this.captions.length);
            let max = 0;
            transactions.forEach(transaction => {
                let index = new Date(transaction.TransactionDate.toString()).getDay();
                this.coords[index] += transaction.Amount;
            });
            this.coords.forEach(coord => {
                max = Math.max(max, coord);
            });
            let k = 300 / max;                        
            this.coords.forEach((coord, i) => {                
                this.coords[i] = 300 - coord * k;
                
            });
        });
        
    }
    private loadToday() {
        let date = moment(new Date());
        let monday = date.hour(0).minute(0).second(0);
        let sunday = monday.clone().add(24, 'hours');
        
        let a = this.repos.transactionRepo.query({
            $filter: `TransactionDate ge DateTime'${monday.format()}' and TransactionDate lt DateTime'${sunday.format()}'`
        });
        console.log(a);
        this.captions = [];
        this.delimeters = 12;
        this.coords = [];
        for (let time = 0; time <= 24; time += 2) {
            this.captions.push(time.toString());
            this.coords.push(0);
        }
        this.coords = [100, 200, 150, 300, 200, 100, 250, 200, 50, 60, 70, 100, 200];
        //a.$promise.then(transactions => {            
        //    transactions.forEach(transaction => {
        //        console.log(transaction);
        //        let date = moment(transaction.TransactionDate);
        //        console.log(date.local());
        //        let index = Math.floor(date.hours() / 2);
        //        this.coords[index] += transaction.Amount;
        //    });
        //    this.prepareCoords();
        //});
    }

    private prepareCoords() {
        let max = 0;
        let t = [];
        this.coords.forEach(coord => {
            max = Math.max(max, coord);
        });
        if (max == 0) return;
        let k = 300 / max;
        this.coords.forEach((coord, i) => {
            t[i] = 300 - coord * k;
        });
        this.coords = t;
    }

    private loadData() {
        switch (this.type) {
            case Types.Year: this.loadYear(); break;
            case Types.Month: this.loadMonth(); break;
            case Types.Week: this.loadWeek(); break;
            default: this.loadToday(); break;
        }
    }

    public $onDestroy() {
        if (this.watcher) this.watcher();
    }

    public showModal(date: moment.Moment) {
        this.modalService.showModal<moment.Moment>({
            url: '/app/transactions/modal.template.html',
            title: 'New Transaction',
            data: date,
            closeOnOverlayClick: true
        });
    }

    public clicked(rect: number) {
        let date = moment(new Date());

        switch (this.type) {
            case Types.Year: date.month(rect); date.date(1); break;
            case Types.Month: date.date(1); for (let i = 0; i < rect; i++) date.add(3, 'days'); break;
            case Types.Week: {
                date.day(1);
                for (let i = 0; i < rect; i++) {
                    date.add(1, 'days');
                }
            } break;
            default: date.hour(0); date.minute(0); date.second(0); date.add(rect * 2, 'hours');
        }
        //console.log(date.format());
        this.showModal(date);  
    }

    public coords = [50, 250, 300, 10, 50, 50, 120, 300, 200, 0, 300, 0];
    public captions: string[];
}

TransactionsController.$inject = [ModalService_NAME, Repositories_NAME, '$stateParams', '$scope'];

export default TransactionsController;