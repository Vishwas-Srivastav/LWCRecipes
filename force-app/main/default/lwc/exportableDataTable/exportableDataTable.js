import { LightningElement, track } from 'lwc';

const COLUMNS = [
  { label: 'Name', fieldName: 'name', type: 'text' },
  { label: 'Category', fieldName: 'category', type: 'text' },
  { label: 'Revenue', fieldName: 'revenue', type: 'currency' }
];

export default class ExportableDataTable extends LightningElement {
  columns = COLUMNS;

  @track data = [
    { id: '1', name: 'Acme Corp', category: 'Enterprise', revenue: 5000000 },
    { id: '2', name: 'Global Tech', category: 'Mid-Market', revenue: 1200000 }
  ];

  handleExport() {
    const headers = ['Name', 'Category', 'Revenue'];
    const csvRows = [headers.join(',')];

    this.data.forEach((row) => {
      csvRows.push([`"${row.name}"`, `"${row.category}"`, row.revenue].join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'export_accounts.csv';
    link.click();
  }
}
