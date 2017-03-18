import {ModalService, NAME as ModalService_NAME} from './../modal.service';

export interface IModal<T> {
    url: string;
    title?: string;
    multiple?: boolean;
    closeOnOverlayClick?: boolean;
    data?: T;
}

export class ModalItemController<T> implements ng.IComponentOptions {
    constructor(private modalService: ModalService) {
        console.log(this.config);
    }
    public config: IModal<T>;

    public close() {
        this.modalService.closeModal(this.config);
    }
}

ModalItemController.$inject = [ModalService_NAME];

export default ModalItemController;