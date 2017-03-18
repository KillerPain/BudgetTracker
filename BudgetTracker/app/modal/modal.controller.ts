import {ModalService, NAME as ModalService_NAME} from './modal.service';

export class ModalController implements ng.IComponentOptions {
    constructor(private modalService: ModalService) { }
    public getModals() {
        return this.modalService.modals;
    }

    private lastDeleted: number = 0;

    private closeModals(deletion: number) {
        let modals = this.getModals();
        for (let i = modals.length - 1; i >= 0; i--) {
            if (modals[i].closeOnOverlayClick && deletion != this.lastDeleted) continue;
            this.modalService.closeModal(modals[i]);
            this.lastDeleted++;
            this.closeModals(deletion);
            return;
        }
    }

    public close() {
        //this.closeModals(this.lastDeleted);

        //this.modalService.modals = [];

        let modals = this.getModals();
        this.modalService.closeModal(_(modals).last());
    }
}

ModalController.$inject = [ModalService_NAME];

export default ModalController;