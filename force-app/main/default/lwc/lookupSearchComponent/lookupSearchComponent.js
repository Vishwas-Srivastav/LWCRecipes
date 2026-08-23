import { LightningElement, track, wire } from 'lwc';
import searchAccounts from '@salesforce/apex/AccountController.searchAccounts';

export default class LookupSearchComponent extends LightningElement {
  @track searchKey = '';
  @track selectedRecord = null;
  @track searchResults = [];

  @wire(searchAccounts, { searchKey: '$searchKey' })
  wiredAccounts({ data, error }) {
    if (data) {
      this.searchResults = data;
    } else if (error) {
      this.searchResults = [];
    }
  }

  get hasSearchResults() {
    return this.searchResults && this.searchResults.length > 0 && this.searchKey !== '';
  }

  handleSearchChange(event) {
    this.searchKey = event.target.value;
  }

  handleSelectRecord(event) {
    const id = event.currentTarget.dataset.id;
    const name = event.currentTarget.dataset.name;
    this.selectedRecord = { Id: id, Name: name };
    this.searchResults = [];
    this.searchKey = '';

    this.dispatchEvent(new CustomEvent('recordselection', { detail: { selectedId: id } }));
  }

  handleRemoveSelection() {
    this.selectedRecord = null;
  }
}
