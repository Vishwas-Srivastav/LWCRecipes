import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/RecordSelected__c';

/**
 * Recipe: LMS Publisher
 * Demonstrates:
 * - @wire(MessageContext) for acquiring context
 * - publish() method from lightning/messageService
 * - Decoupled messaging over custom Lightning Message Channel
 */
export default class LmsPublisher extends LightningElement {
  recordId = '001100000001ACME';
  recordName = 'Acme Corporation';

  @wire(MessageContext)
  messageContext;

  handleRecordIdChange(event) {
    this.recordId = event.target.value;
  }

  handleRecordNameChange(event) {
    this.recordName = event.target.value;
  }

  handlePublish() {
    const payload = {
      recordId: this.recordId,
      recordName: this.recordName,
      source: 'lmsPublisher'
    };
    publish(this.messageContext, RECORD_SELECTED_CHANNEL, payload);
  }
}
