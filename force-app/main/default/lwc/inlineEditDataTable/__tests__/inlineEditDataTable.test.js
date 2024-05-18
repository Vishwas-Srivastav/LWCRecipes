import { createElement } from 'lwc';
import InlineEditDataTable from 'c/inlineEditDataTable';

jest.mock(
    '@salesforce/apex/OpportunityController.getOpportunities',
    () => {
        const { createApexTestWireAdapter } = require('@salesforce/sfdx-lwc-jest');
        return {
            default: createApexTestWireAdapter(jest.fn())
        };
    },
    { virtual: true }
);

describe('c-inline-edit-data-table', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders datatable element', () => {
        const element = createElement('c-inline-edit-data-table', {
            is: InlineEditDataTable
        });
        document.body.appendChild(element);

        const datatable = element.shadowRoot.querySelector('lightning-datatable');
        expect(datatable).not.toBeNull();
    });
});
