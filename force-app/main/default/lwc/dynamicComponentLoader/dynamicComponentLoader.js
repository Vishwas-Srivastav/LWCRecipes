import { LightningElement, track } from 'lwc';

export default class DynamicComponentLoader extends LightningElement {
  @track selectedView = 'card';

  viewOptions = [
    { label: 'Card View', value: 'card' },
    { label: 'Table View', value: 'table' }
  ];

  get isCardView() {
    return this.selectedView === 'card';
  }
  get isTableView() {
    return this.selectedView === 'table';
  }

  handleViewChange(event) {
    this.selectedView = event.detail.value;
  }
}
