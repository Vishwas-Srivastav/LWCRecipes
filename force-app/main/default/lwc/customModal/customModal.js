import { LightningElement, api, track } from 'lwc';

/**
 * Recipe: Custom Modal Dialog
 * Demonstrates:
 * - Reusable slot projection (header, body, footer)
 * - Public API imperative controls (@api openModal, @api closeModal)
 * - Accessibility keyboard listeners (Escape key handler)
 * - Backdrop click behavior control
 * - Dynamic size classes (small, medium, large)
 */
export default class CustomModal extends LightningElement {
    @api title = 'Modal Title';
    @api size = 'medium'; // small, medium, large
    @api closeOnBackdropClick = false;

    @track isOpen = false;

    /**
     * Imperative public method to show modal dialog.
     */
    @api
    openModal() {
        this.isOpen = true;
        this.dispatchEvent(new CustomEvent('modalopen'));
    }

    /**
     * Imperative public method to hide modal dialog.
     */
    @api
    closeModal() {
        this.isOpen = false;
        this.dispatchEvent(new CustomEvent('modalclose'));
    }

    get modalClass() {
        let sizeClass = 'slds-modal_medium';
        if (this.size === 'small') {
            sizeClass = 'slds-modal_small';
        } else if (this.size === 'large') {
            sizeClass = 'slds-modal_large';
        }
        return `slds-modal slds-fade-in-open ${sizeClass}`;
    }

    handleBackdropClick() {
        if (this.closeOnBackdropClick) {
            this.closeModal();
        }
    }

    handleKeyDown(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            this.closeModal();
        }
    }

    handleConfirm() {
        this.dispatchEvent(new CustomEvent('confirm'));
        this.closeModal();
    }
}
