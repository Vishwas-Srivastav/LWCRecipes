import { LightningElement, wire, track } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';
import updateOpportunities from '@salesforce/apex/OpportunityController.updateOpportunities';
import { refreshApex } from '@salesforce/apex';

const COLUMNS = [
  { label: 'Opportunity Name', fieldName: 'Name', editable: true },
  { label: 'Stage', fieldName: 'StageName', editable: true },
  { label: 'Amount', fieldName: 'Amount', type: 'currency', editable: true }
];

export default class InlineEditDataTable extends LightningElement {
  columns = COLUMNS;
  @track draftValues = [];
  wiredOpportunitiesResult;
  opportunities = [];

  @wire(getOpportunities)
  wiredOpportunities(result) {
    this.wiredOpportunitiesResult = result;
    if (result.data) {
      this.opportunities = result.data;
    }
  }

  handleSave(event) {
    const records = event.detail.draftValues;
    updateOpportunities({ opportunitiesToUpdate: records })
      .then(() => {
        this.draftValues = [];
        return refreshApex(this.wiredOpportunitiesResult);
      })
      .catch((error) => {
        console.error('Error saving inline edits:', error);
      });
  }
}
