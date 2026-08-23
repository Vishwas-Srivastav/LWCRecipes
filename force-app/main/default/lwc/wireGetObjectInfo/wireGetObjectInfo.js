import { LightningElement, wire, track } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

/**
 * Recipe: Wire Get Object Info & Picklists
 * Demonstrates schema metadata inspection and picklist option extraction.
 */
export default class WireGetObjectInfo extends LightningElement {
  @track selectedIndustry = '';

  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  objectInfo;

  get defaultRecordTypeId() {
    return this.objectInfo.data ? this.objectInfo.data.defaultRecordTypeId : null;
  }

  get objectLabel() {
    return this.objectInfo.data ? this.objectInfo.data.label : '';
  }

  @wire(getPicklistValues, {
    recordTypeId: '$defaultRecordTypeId',
    fieldApiName: INDUSTRY_FIELD
  })
  industryPicklistResults;

  get industryOptions() {
    return this.industryPicklistResults.data ? this.industryPicklistResults.data.values : [];
  }

  handleIndustryChange(event) {
    this.selectedIndustry = event.detail.value;
  }
}
