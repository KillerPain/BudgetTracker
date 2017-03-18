import {Repositories, NAME as Repositories_NAME} from './../repositories.service';

import {ModalItemController} from './../modal/modal.item/modal.item.controller';

export class ProductFormController {
    constructor(repos: Repositories) {
        this.repo = repos.productRepo;
        this.categoryRepo = repos.categoryRepo;
    }



    public model: Models.IProduct;

    public repo: ng.resource.IResourceClass<Models.IProduct & ng.resource.IResource<Models.IProduct>>;
    public categoryRepo: ng.resource.IResourceClass<Models.ICategory & ng.resource.IResource<Models.ICategory>>;
    public category: Models.ICategory;

    private modal: ModalItemController<Models.IProduct>;

    public categories: Models.ICategory[];

    public $onInit() {
        this.model = this.model || {};
        this.categoryRepo.query().$promise.then(categories => {
            this.categories = categories;
            if (this.category) {
                this.model.Category = _(categories).find(c => c.ID == this.category.ID);
            }
        });
    }

    public create() {
        if (this.model.Category) {
            this.model.Category_ID = this.model.Category.ID;
        }
        this.model.Category = undefined;
        this.model.Transactions = undefined;
        let product = new this.repo(this.model);
        product.$save().then(() => {
            this.modal.close();
        });
    }

    public update() {
        let product = this.repo.get({ ID: this.model.ID });
        product.$promise.then(c => {
            product.Category = undefined;
            product.Transactions = undefined;
            product.Title = this.model.Title;
            product.Category_ID = this.model.Category.ID;
            product.$update().then(() => {
                this.modal.close();
            });
        });
    }
}

ProductFormController.$inject = [Repositories_NAME];
export default ProductFormController;