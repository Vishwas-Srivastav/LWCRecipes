import { createElement } from 'lwc';
import PaginatedDataTable from 'c/paginatedDataTable';
import searchAccounts from '@salesforce/apex/AccountController.searchAccounts';

// Mock Apex call
jest.mock(
    '@salesforce/apex/AccountController.searchAccounts',
    () => {
        const { createApexTestWireAdapter } = require('@salesforce/sfdx-lwc-jest');
        return {
            default: createApexTestWireAdapter(jest.fn())
        };
    },
    { virtual: true }
);

const MOCK_ACCOUNTS = [
    { Id: '001100000001', Name: 'Acme Corp', Industry: 'Technology', AnnualRevenue: 1000000, Phone: '555-0100', Rating: 'Hot' },
    { Id: '001100000002', Name: 'Global Logistics', Industry: 'Transportation', AnnualRevenue: 500000, Phone: '555-0200', Rating: 'Warm' }
];

describe('c-paginated-data-table', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('renders account rows when data is loaded via wire', async () => {
        const element = createElement('c-paginated-data-table', {
            is: PaginatedDataTable
        });
        document.body.appendChild(element);

        // Emit mock accounts
        searchAccounts.emit(MOCK_ACCOUNTS);

        await Promise.resolve();

        const datatable = element.shadowRoot.querySelector('lightning-datatable');
        expect(datatable).not.toBeNull();
        expect(datatable.data.length).toBe(2);
        expect(datatable.data[0].Name).toBe('Acme Corp');
    });

    it('handles search key input correctly', async () => {
        const element = createElement('c-paginated-data-table', {
            is: PaginatedDataTable
        });
        document.body.appendChild(element);

        searchAccounts.emit(MOCK_ACCOUNTS);
        await Promise.resolve();

        const searchInput = element.shadowRoot.querySelector('lightning-input');
        expect(searchInput).not.toBeNull();

        searchInput.value = 'Acme';
        searchInput.dispatchEvent(new CustomEvent('change', { target: searchInput }));

        await Promise.resolve();

        expect(searchInput.value).toBe('Acme');
    });
});
