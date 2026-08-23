import { LightningElement, api } from 'lwc';

export default class RecordEditFormCustom extends LightningElement {
  @api recordId;

  handleSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    this.template.querySelector('lightning-record-edit-form').submit(fields);
  }

  handleSuccess(event) {
    console.log('Record saved successfully:', event.detail.id);
  }
}
