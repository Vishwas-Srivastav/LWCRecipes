import { LightningElement, track } from 'lwc';

export default class SummaryMetricCards extends LightningElement {
    @track metrics = [
        { label: 'Total Revenue', value: '$2.4M', trend: '+14% vs last quarter' },
        { label: 'Active Deals', value: '42', trend: '+5 new this week' },
        { label: 'Win Rate', value: '68%', trend: '+3% improvement' }
    ];
}
