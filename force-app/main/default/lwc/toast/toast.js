import { LightningElement, track } from 'lwc';

export default class Toast extends LightningElement {
  showSuccessToast() {
    this.dispatchEvent(
        new ShowToastEvent({
            title: 'Success',
            message: 'Operation completed successfully.',
            variant: 'success',
            mode: 'dismissable'
        })
    );
}

showErrorToast() {
    this.dispatchEvent(
        new ShowToastEvent({
            title: 'Error',
            message: 'An error occurred while processing your request.',
            variant: 'error',
            mode: 'sticky' // stays until user dismisses
        })
    );
}
}