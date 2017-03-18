import {ModalService, NAME as ModalService_NAME} from './../../modal/modal.service';
import {ModalItemController} from './../../modal/modal.item/modal.item.controller';
import {Repositories, NAME as Repositories_NAME} from './../../repositories.service';

export interface ITransactionModel {
    ID: number;
    Category: Models.ICategory;
    ProductID: number;
    Amount: number;
    Currency: Models.ICurrency;
    TransactionDate: Date;
}

export interface IRequestModel {
    ID?: number;
    CategoryID: number;
    ProductID: number;
    Amount: number;
    CurrencyID: number;
    TransactionDate: Date;
}

export class TransactionFormController {
    constructor(private modalService: ModalService, private repos: Repositories, private $scope: ng.IScope) {
        this.repo = repos.transactionRepo;
    }

    public modal: ModalItemController<any>;

    public model: ITransactionModel;
    public type: string;
    public currencies: Models.ICurrency[] = [];
    public categories: Models.ICategory[] = [];
    public products: Models.IProduct[] = [];
    public repo: ng.resource.IResourceClass<Models.ITransaction & ng.resource.IResource<Models.ITransaction>>;
    public date: moment.Moment;

    public categoryWatcher;

    public $onInit() {
        console.log(this.date);
        this.categories = this.repos.categoryRepo.query();
        this.categories.$promise.then(c => {
            if (c[0]) this.model.Category = c[0];
        })
        this.products = [];
        this.currencies = this.repos.currencyRepo.query();

        this.currencies.$promise.then(c => {
            if (c[0]) this.model.Currency = c[0].ID;
        })

        this.model = this.model || {
            Amount: 0,
            Category: null,
            ID: undefined,
            ProductID: null,
            Currency: null,
            TransactionDate: this.date.toDate()
        }
        this.categoryWatcher = this.$scope.$watch('$ctrl.model.Category', (newValue: Models.ICategory, oldValue) => {
            if (newValue) {
                if (newValue.Products[0]) this.model.ProductID = newValue.Products[0].ID;
            }
        });
    }

    public getProducts(categoryId: number) {
        let category = _(this.categories).find(c => c.ID == categoryId);
        if (category) {
            return category.Products;
        } else {
            return this.products;
        }
    }

    public addCategory() {
        this.modalService.showModal({
            url: '/app/category/category.form.modal.template.html',
            title: 'New Category',
            closeOnOverlayClick: true
        })
    }

    public addProduct(category: Models.ICategory) {
        this.modalService.showModal<Models.IModalData<Models.ICategory>>({
            url: '/app/product/product-form.modal.template.html',
            title: 'New Product',
            data: {
                Additional: category
            }
        })        
    }

    public createTransaction() {
        console.log(this.model);
        let transactionModel: Models.ITransaction = {
            ID: this.model.ID,
            Amount: this.model.Amount,
            Currency_ID: this.model.Currency.ID,
            Product_ID: this.model.ProductID,
            User_ID: null,
            TransactionDate: this.model.TransactionDate
        };
        let transaction = new this.repo(transactionModel);
        console.log(transaction);
        transaction.$save().then(transaction => {
            this.modal.close();
        });
    }

    public cancel() {
        this.modal.close();
    }
}

TransactionFormController.$inject = [ModalService_NAME, Repositories_NAME, '$scope']

export default TransactionFormController;