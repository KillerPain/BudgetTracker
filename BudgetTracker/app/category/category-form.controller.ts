import {Repositories, NAME as Repositories_NAME} from './../repositories.service';
import {ModalItemController} from './../modal/modal.item/modal.item.controller';


export class CategoryFormController {
    constructor(repos: Repositories) {
        this.repo = repos.categoryRepo;
    }

    public model: Models.ICategory = {
        
    }

    private modal: ModalItemController<Models.ICategory>;
    public repo: ng.resource.IResourceClass<Models.ICategory & ng.resource.IResource<Models.ICategory>>;

    public $onInit() {

    }

    public create() {
        let category = new this.repo(this.model);
        category.$save();
    }

    public update() {
        let category = this.repo.get({ ID: 1 });
        category.$promise.then(c => {
            category.Title = this.model.Title;
            category.$update();
        });
    }
}

CategoryFormController.$inject = [Repositories_NAME];
export default CategoryFormController;