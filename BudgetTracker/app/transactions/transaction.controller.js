define(["require", "exports", './../modal/modal.service', './../repositories.service'], function (require, exports, modal_service_1, repositories_service_1) {
    "use strict";
    (function (Types) {
        Types[Types["Today"] = 0] = "Today";
        Types[Types["Week"] = 1] = "Week";
        Types[Types["Month"] = 2] = "Month";
        Types[Types["Year"] = 3] = "Year";
    })(exports.Types || (exports.Types = {}));
    var Types = exports.Types;
    var TransactionsController = (function () {
        function TransactionsController(modalService, repos, $stateParams, $scope) {
            this.modalService = modalService;
            this.repos = repos;
            this.$stateParams = $stateParams;
            this.$scope = $scope;
            this.type = Types.Today;
            this.coords = [50, 250, 300, 10, 50, 50, 120, 300, 200, 0, 300, 0];
        }
        TransactionsController.prototype.$onInit = function () {
            this.captions = [];
            for (var i = 0; i < 11; i++) {
                this.captions.push(new Date(2016, i, 1).getMonth().toString());
            }
            this.$stateParams.type = this.$stateParams.type.toLowerCase();
            if (this.$stateParams.type == "today") {
                this.type = Types.Today;
            }
            else if (this.$stateParams.type == "week") {
                this.type = Types.Week;
            }
            else if (this.$stateParams.type == "month") {
                this.type = Types.Month;
            }
            else if (this.$stateParams.type == "year") {
                this.type = Types.Year;
            }
            this.loadData();
        };
        TransactionsController.prototype.loadYear = function () {
            var _this = this;
            var date = moment(new Date).date(1);
            this.captions = [];
            this.delimeters = 12;
            for (var i = 0; i < 12; i++) {
                date.month(i);
                this.captions.push(date.format('MMM'));
            }
            this.coords = this.fillCoords(this.delimeters);
            var first = date.clone().month(0);
            var last = date.clone().month(0).add(1, 'years');
            var promise = this.repos.transactionRepo.query({
                $filter: "TransactionDate ge DateTime'" + first.format() + "' and TransactionDate lt DateTime'" + last.format() + "'"
            });
            promise.$promise.then(function (transactions) {
                transactions.forEach(function (transaction) {
                    var date = moment(transaction.TransactionDate);
                    var index = date.month();
                    _this.coords[index] += transaction.Amount;
                });
                _this.prepareCoords();
            });
        };
        TransactionsController.prototype.loadMonth = function () {
            var _this = this;
            var date = moment(new Date());
            var first = date.clone().date(1).hour(0).minute(0).second(0);
            var last = first.clone().add(date.daysInMonth(), 'days');
            this.delimeters = Math.ceil(date.daysInMonth() / 3);
            this.captions = [];
            var day = 1;
            for (var i = 0; i < this.delimeters; i++) {
                this.captions.push(day.toString());
                day += 3;
            }
            this.coords = this.fillCoords(this.delimeters);
            var promise = this.repos.transactionRepo.query({
                $filter: "TransactionDate ge DateTime'" + first.format() + "' and TransactionDate lt DateTime'" + last.format() + "'"
            });
            promise.$promise.then(function (transactions) {
                transactions.forEach(function (transaction) {
                    var date = moment(transaction.TransactionDate);
                    var index = Math.ceil(date.date() / 3) - 1;
                    _this.coords[index] += transaction.Amount;
                });
                _this.prepareCoords();
            });
        };
        TransactionsController.prototype.fillCoords = function (len, x) {
            var a = [];
            for (var i = 0; i < len; i++) {
                a.push(x || 0);
            }
            return a;
        };
        TransactionsController.prototype.loadWeek = function () {
            var _this = this;
            var date = moment(new Date());
            var monday = date.day(1).hour(0).minute(0).second(0);
            var sunday = monday.clone().add(6, 'days');
            var a = this.repos.transactionRepo.query({
                $filter: "TransactionDate ge DateTime'" + monday.format() + "' and TransactionDate le DateTime'" + sunday.format() + "'"
            });
            this.captions = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            this.delimeters = 7;
            a.$promise.then(function (transactions) {
                _this.coords = _this.fillCoords(_this.captions.length);
                var max = 0;
                transactions.forEach(function (transaction) {
                    var index = new Date(transaction.TransactionDate.toString()).getDay();
                    _this.coords[index] += transaction.Amount;
                });
                _this.coords.forEach(function (coord) {
                    max = Math.max(max, coord);
                });
                var k = 300 / max;
                _this.coords.forEach(function (coord, i) {
                    _this.coords[i] = 300 - coord * k;
                });
            });
        };
        TransactionsController.prototype.loadToday = function () {
            var date = moment(new Date());
            var monday = date.hour(0).minute(0).second(0);
            var sunday = monday.clone().add(24, 'hours');
            var a = this.repos.transactionRepo.query({
                $filter: "TransactionDate ge DateTime'" + monday.format() + "' and TransactionDate lt DateTime'" + sunday.format() + "'"
            });
            console.log(a);
            this.captions = [];
            this.delimeters = 12;
            this.coords = [];
            for (var time = 0; time <= 24; time += 2) {
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
        };
        TransactionsController.prototype.prepareCoords = function () {
            var max = 0;
            var t = [];
            this.coords.forEach(function (coord) {
                max = Math.max(max, coord);
            });
            if (max == 0)
                return;
            var k = 300 / max;
            this.coords.forEach(function (coord, i) {
                t[i] = 300 - coord * k;
            });
            this.coords = t;
        };
        TransactionsController.prototype.loadData = function () {
            switch (this.type) {
                case Types.Year:
                    this.loadYear();
                    break;
                case Types.Month:
                    this.loadMonth();
                    break;
                case Types.Week:
                    this.loadWeek();
                    break;
                default:
                    this.loadToday();
                    break;
            }
        };
        TransactionsController.prototype.$onDestroy = function () {
            if (this.watcher)
                this.watcher();
        };
        TransactionsController.prototype.showModal = function (date) {
            this.modalService.showModal({
                url: '/app/transactions/modal.template.html',
                title: 'New Transaction',
                data: date,
                closeOnOverlayClick: true
            });
        };
        TransactionsController.prototype.clicked = function (rect) {
            var date = moment(new Date());
            switch (this.type) {
                case Types.Year:
                    date.month(rect);
                    date.date(1);
                    break;
                case Types.Month:
                    date.date(1);
                    for (var i = 0; i < rect; i++)
                        date.add(3, 'days');
                    break;
                case Types.Week:
                    {
                        date.day(1);
                        for (var i = 0; i < rect; i++) {
                            date.add(1, 'days');
                        }
                    }
                    break;
                default:
                    date.hour(0);
                    date.minute(0);
                    date.second(0);
                    date.add(rect * 2, 'hours');
            }
            //console.log(date.format());
            this.showModal(date);
        };
        return TransactionsController;
    }());
    exports.TransactionsController = TransactionsController;
    TransactionsController.$inject = [modal_service_1.NAME, repositories_service_1.NAME, '$stateParams', '$scope'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TransactionsController;
});
//# sourceMappingURL=transaction.controller.js.map