import { LightningElement, track } from 'lwc';

export default class KanbanBoardView extends LightningElement {
    @track columns = [
        {
            stage: 'Prospecting',
            records: [
                { id: '1', name: 'Acme Renewal', amount: 50000 },
                { id: '2', name: 'Global Expansion', amount: 120000 }
            ]
        },
        {
            stage: 'Qualification',
            records: [
                { id: '3', name: 'Tech Solutions Deal', amount: 75000 }
            ]
        },
        {
            stage: 'Closed Won',
            records: [
                { id: '4', name: 'Enterprise License', amount: 250000 }
            ]
        }
    ];
}
