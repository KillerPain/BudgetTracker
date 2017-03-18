import {NAME as ModalService_NAME, ModalService} from './../modal/modal.service';
import {NAME as Repositories_NAME, Repositories} from './../repositories.service';
import {ModalItemController, IModal} from './../modal/modal.item/modal.item.controller';

interface IStateParams {
    type: string;
}

const DICTIONARIES = ['category', 'product'];

const HEADERS = [
    ["Title"],
    ["Category", "Title"]
]
const FIELDS: ((f: any) => any)[][] = [
    [(c: Models.ICategory) => c.Title],
    [(p: Models.IProduct) => p.Category.Title, (p: Models.IProduct) => p.Title]
]

const EDIT: ((f: any) => IModal<Models.IModalData<any>>)[] = [
    null, (p: Models.IProduct) => {
        console.log('edit', p);
        return {
            url: '/app/product/product-form.modal.template.html',
            title: 'Edit Product',
            data: {
                Additional: p.Category,
                Model: p,
                Type: 'edit'
            }
        }
    }
]

enum Dictionary {
    category,
    product
}



export class DictionaryController {
    constructor(private $stateParams: IStateParams, private $state: ng.ui.IStateService, private repositories: Repositories, private modals: ModalService) {
        if (!_(DICTIONARIES).find(d => d == $stateParams.type)) {
            $state.go('main');
        }
        this.type = Dictionary[$stateParams.type];
        switch (this.type) {
            case Dictionary.category: {
                let items = this.repositories.categoryRepo.query();
                items.$promise.then(categories => {

                })
                break;
            }
            case Dictionary.product: {
                let items = this.repositories.productRepo.query();
                items.$promise.then(products => {
                    this.items = products;
                });
                break;
            }
        }
        
    }

    public getField(number, f) {
        return FIELDS[this.type][number](f);
    }

    public edit(f: any) {
        console.log(f);
        let modalConfig = EDIT[this.type](f);
        this.modals.showModal(modalConfig);
    }

    public removing: any[] = []

    public confirmRemove(f: Models.ICategory | Models.IProduct) {
        this.removing.push(f);
    }

    public cancelRemove(f: Models.ICategory | Models.IProduct) {
        _(this.removing).remove(i => i == f).commit();
    }

    public isRemoving(f: any) {
        return _(this.removing).find(f);
    }

    public remove(f: Models.ICategory | Models.IProduct) {
        switch (this.type) {
            case Dictionary.category: break;
            case Dictionary.product: {
                this.repositories.productRepo.get({ id: f.ID }).$delete({ id: f.ID }).then(() => {
                    _(this.items).remove((i: Models.IProduct) => i.ID == f.ID).commit();
                });
                break;
            }
        }
    }

    public items: any[];

    public getHeaders() {
        return HEADERS[this.type];
    }

    public getItems() {
        return this.items;
    }

    public type: Dictionary;
}

DictionaryController.$inject = ['$stateParams', '$state', Repositories_NAME, ModalService_NAME];
export default DictionaryController;