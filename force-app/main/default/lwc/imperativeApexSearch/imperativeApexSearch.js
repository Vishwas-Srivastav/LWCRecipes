/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement, track } from 'lwc';
import searchContacts from '@salesforce/apex/ContactController.searchContacts';
import { notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';

const DEBOUNCE_DELAY = 300; // milliseconds

/**
 * Recipe: Imperative Apex Search with Debounce
 * Demonstrates:
 * - Imperative Apex execution (calling searchContacts directly)
 * - Timer-based JS debouncing to prevent excessive Apex calls
 * - Handling loading spinner state and exception messages
 * - Explicit cache invalidation via notifyRecordUpdateAvailable
 */
export default class ImperativeApexSearch extends LightningElement {
  @track searchKey = '';
  @track contacts = [];
  @track isLoading = false;
  @track error = null;

  debounceTimeout;

  get hasContacts() {
    return this.contacts && this.contacts.length > 0;
  }

  get errorMessage() {
    if (!this.error) return '';
    if (Array.isArray(this.error.body)) {
      return this.error.body.map((e) => e.message).join(', ');
    } else if (typeof this.error.body?.message === 'string') {
      return this.error.body.message;
    }
    return JSON.stringify(this.error);
  }

  handleSearchChange(event) {
    this.searchKey = event.target.value;

    // Clear existing debounce timer
    window.clearTimeout(this.debounceTimeout);

    if (!this.searchKey || this.searchKey.trim() === '') {
      this.contacts = [];
      this.isLoading = false;
      this.error = null;
      return;
    }

    this.isLoading = true;

    // Set 300ms debounce timer before making imperative Apex call
    this.debounceTimeout = window.setTimeout(() => {
      this.executeSearch();
    }, DEBOUNCE_DELAY);
  }

  executeSearch() {
    searchContacts({ searchKey: this.searchKey })
      .then((result) => {
        this.contacts = result;
        this.error = null;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.contacts = [];
        this.isLoading = false;
      });
  }

  /**
   * Helper to manually invalidate cache if a record was updated externally.
   */
  refreshContactCache(recordId) {
    notifyRecordUpdateAvailable([{ recordId }]);
  }
}
