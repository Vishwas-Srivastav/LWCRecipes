import { LightningElement, track } from 'lwc';

export default class ChartJsDashboard extends LightningElement {
  @track chartData = [
    { label: 'Q1 Target Achievement', value: 85 },
    { label: 'Customer Retention Rate', value: 92 },
    { label: 'Support SLA Compliance', value: 78 }
  ];
}
