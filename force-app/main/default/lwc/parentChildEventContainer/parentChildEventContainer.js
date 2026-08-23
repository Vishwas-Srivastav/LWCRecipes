import { LightningElement, track } from 'lwc';

export default class ParentChildEventContainer extends LightningElement {
  @track lastEventMessage = 'No events received yet.';

  handleTrigger() {
    this.lastEventMessage = 'Event triggered from child component at ' + new Date().toLocaleTimeString();
    this.dispatchEvent(
      new CustomEvent('customevent', {
        detail: { message: this.lastEventMessage },
        bubbles: true,
        composed: true
      })
    );
  }
}
