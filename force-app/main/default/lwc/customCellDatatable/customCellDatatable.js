import { LightningElement, track } from 'lwc';

const COLUMNS = [
  { label: 'Project Name', fieldName: 'name', type: 'text' },
  {
    label: 'Website',
    fieldName: 'url',
    type: 'url',
    typeAttributes: { label: { fieldName: 'name' }, target: '_blank' }
  },
  { label: 'Budget', fieldName: 'budget', type: 'currency', typeAttributes: { currencyCode: 'USD' } },
  { label: 'Status', fieldName: 'status', type: 'text' }
];

export default class CustomCellDatatable extends LightningElement {
  columns = COLUMNS;

  @track data = [
    { id: '1', name: 'Salesforce Integration', url: 'https://salesforce.com', budget: 150000, status: 'Active' },
    {
      id: '2',
      name: 'Mobile App Migration',
      url: 'https://developer.salesforce.com',
      budget: 85000,
      status: 'In Review'
    }
  ];
}
