/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement, track } from 'lwc';

export default class AudioVisualFeedback extends LightningElement {
  @track isFlashing = false;
  @track statusMessage = 'Idle';

  get alertClass() {
    return this.isFlashing ? 'slds-box slds-theme_success slds-theme_alert-texture' : 'slds-box slds-theme_shade';
  }

  handleSimulate() {
    this.isFlashing = true;
    this.statusMessage = 'Updated at ' + new Date().toLocaleTimeString();
    setTimeout(() => {
      this.isFlashing = false;
    }, 1500);
  }
}
