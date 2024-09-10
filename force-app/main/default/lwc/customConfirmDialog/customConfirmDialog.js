import { LightningElement, track } from 'lwc';

export default class CustomConfirmDialog extends LightningElement {
    @track isConfirmOpen = false;

    handleShowConfirm() {
        this.isConfirmOpen = true;
    }

    handleCancel() {
        this.isConfirmOpen = false;
    }

    handleConfirm() {
        this.isConfirmOpen = false;
        console.log('Record deletion confirmed.');
    }
}
