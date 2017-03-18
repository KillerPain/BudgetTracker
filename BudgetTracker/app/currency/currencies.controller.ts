export interface IGetCurrenciesResponseModel {
    Title: string;
    PubDate: string;
    Description: string;
    Quant: number;
    Index: string;
    Change: number;
    Link: string;
}

export interface ICurrencyModel {
    Amount: number;
    TrendClass: string;
    Change: number;
    Currency: string;
    TrendIcon: string;
}

export class CurrenciesController {
    constructor(private $http: ng.IHttpService) { }

    public $onInit() {
        this.$http.get('/api/GetCurrencies').then(r => {
            let data = (<IGetCurrenciesResponseModel[]>(r.data));
            this.currencies = [];
            data.forEach(item => {
                if (item.Title == "RUB" || item.Title == "EUR" || item.Title == "USD" || item.Title == "GBP") {
                    this.currencies.push({
                        Amount: +item.Description,
                        Change: item.Change,
                        Currency: item.Title.toLowerCase(),
                        TrendClass: (item.Index.toLowerCase() == '') ? "flat" : item.Index.toLowerCase(),
                        TrendIcon: (item.Index.toLowerCase() == '') ? "" : "trending_" + item.Index.toLowerCase()
                    });
                }
            });
        });
    }

    public currencies: ICurrencyModel[] = [];

    public getCurrencies() {
        return this.currencies;
    }
}
CurrenciesController.$inject = ['$http'];

export default CurrenciesController;