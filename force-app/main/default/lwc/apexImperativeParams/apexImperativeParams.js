import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

/**
 * Recipe: Imperative Apex with Parameters
 * Demonstrates on-demand Apex invocation with dynamic params.
 */
export default class ApexImperativeParams extends LightningElement {
  @track pageSize = 5;
  @track pageNumber = 1;
  @track accounts = [];

  handleSizeChange(event) {
    this.pageSize = parseInt(event.target.value, 10);
  }

  handlePageChange(event) {
    this.pageNumber = parseInt(event.target.value, 10);
  }

  handleFetch() {
    getAccounts({ pageSize: this.pageSize, pageNumber: this.pageNumber })
      .then((result) => {
        this.accounts = result;
      })
      .catch((error) => {
        console.error('Error fetching accounts imperatively:', error);
      });
  }
}
