import { LightningElement, track } from 'lwc';

const COLUMNS = [
    { label: 'Account Name', fieldName: 'name', type: 'text' },
    { label: 'Employees', fieldName: 'employees', type: 'number' },
    { label: 'City', fieldName: 'city', type: 'text' }
];

export default class InfiniteScrollTreeGrid extends LightningElement {
    columns = COLUMNS;

    @track treeData = [
        {
            name: 'Acme Global HQ',
            employees: 5000,
            city: 'San Francisco',
            _children: [
                { name: 'Acme Americas West', employees: 1200, city: 'Seattle' },
                { name: 'Acme Americas East', employees: 800, city: 'New York' }
            ]
        },
        {
            name: 'Global Logistics',
            employees: 3200,
            city: 'Chicago',
            _children: [
                { name: 'Logistics Midwest Hub', employees: 450, city: 'Detroit' }
            ]
        }
    ];
}
