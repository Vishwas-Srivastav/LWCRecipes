import { LightningElement, track } from 'lwc';

/**
 * Recipe: Apex Continuation Callouts
 * Demonstrates async callout integration pattern for long-running web services.
 */
export default class ApexContinuation extends LightningElement {
    @track response = '';

    handleExecuteCallout() {
        // Simulating async continuation callback
        this.response = 'Continuation response received successfully from external API endpoint.';
    }
}
