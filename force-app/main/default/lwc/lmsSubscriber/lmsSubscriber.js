import { LightningElement, wire, track } from 'lwc';
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/RecordSelected__c';

/**
 * Recipe: LMS Subscriber
 * Demonstrates:
 * - Subscribing/Unsubscribing to LMS channel lifecycle
 * - APPLICATION_SCOPE subscription handling
 * - Reactive UI state updates upon receiving message payload
 */
export default class LmsSubscriber extends LightningElement {
    @track receivedPayload = null;
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeFromMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                RECORD_SELECTED_CHANNEL,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeFromMessageChannel() {
        if (this.subscription) {
            unsubscribe(this.subscription);
            this.subscription = null;
        }
    }

    handleMessage(message) {
        this.receivedPayload = message;
    }

    toggleSubscription() {
        if (this.subscription) {
            this.unsubscribeFromMessageChannel();
        } else {
            this.subscribeToMessageChannel();
        }
    }

    get subscriptionStatusLabel() {
        return this.subscription ? 'Unsubscribe Channel' : 'Subscribe Channel';
    }

    get subscriptionStatusVariant() {
        return this.subscription ? 'destructive' : 'brand';
    }
}
