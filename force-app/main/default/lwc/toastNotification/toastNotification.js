import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

/**
 * Recipe: Toast Notification Utility
 * Demonstrates:
 * - Dispatching ShowToastEvent platform notifications
 * - Handling variants (success, error, warning, info)
 * - Handling modes (dismissable, sticky, pester)
 * - Utility helper methods for reusable toast triggers
 */
export default class ToastNotification extends LightningElement {
    @api
    showSuccessToast() {
        this.showToast('Success', 'Operation completed successfully.', 'success', 'dismissable');
    }

    showErrorToast() {
        this.showToast('Error Encountered', 'An error occurred while processing your request.', 'error', 'sticky');
    }

    showWarningToast() {
        this.showToast('Warning', 'System maintenance scheduled in 15 minutes.', 'warning', 'dismissable');
    }

    showInfoToast() {
        this.showToast('Information', 'New features are now available in your workspace.', 'info', 'dismissable');
    }

    /**
     * Reusable toast dispatcher.
     * @param {string} title Toast title.
     * @param {string} message Toast message content.
     * @param {string} variant Toast variant ('success' | 'error' | 'warning' | 'info').
     * @param {string} mode Toast mode ('dismissable' | 'pester' | 'sticky').
     */
    @api
    showToast(title, message, variant = 'info', mode = 'dismissable') {
        const evt = new ShowToastEvent({
            title,
            message,
            variant,
            mode
        });
        this.dispatchEvent(evt);
    }
}
