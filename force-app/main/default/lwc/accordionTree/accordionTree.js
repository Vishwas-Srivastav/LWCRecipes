import { LightningElement, track } from 'lwc';

export default class AccordionTree extends LightningElement {
  @track activeSections = ['A', 'B'];
}
