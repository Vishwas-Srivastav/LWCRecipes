import { LightningElement, track } from 'lwc';

export default class GeoCoderMap extends LightningElement {
    @track mapMarkers = [
        {
            location: {
                Street: '1 Market St',
                City: 'San Francisco',
                State: 'CA',
                PostalCode: '94105'
            },
            title: 'Salesforce Tower',
            description: 'Global Headquarters'
        }
    ];
}
