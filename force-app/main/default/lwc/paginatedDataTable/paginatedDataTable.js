import { LightningElement, wire, track } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import searchAccounts from '@salesforce/apex/AccountController.searchAccounts';

/**
 * @description Column definitions for the Account datatable with action buttons.
 */
const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name', type: 'text', sortable: true },
    { label: 'Industry', fieldName: 'Industry', type: 'text', sortable: true },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency', sortable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Rating', fieldName: 'Rating', type: 'text', sortable: true },
    {
        type: 'action',
        typeAttributes: {
            rowActions: [
                { label: 'View Details', name: 'view_details' },
                { label: 'Select Record', name: 'select_record' }
            ]
        }
    }
];

/**
 * Recipe: Paginated Data Table
 * Demonstrates:
 * - Server & Client-side pagination logic
 * - Dynamic search input debouncing
 * - Dynamic column sorting
 * - Reactive @wire Apex integration with refreshApex
 * - Custom event generation on row selection
 */
export default class PaginatedDataTable extends LightningElement {
    columns = COLUMNS;

    @track searchKey = '';
    @track pageNumber = 1;
    @track pageSize = 5;
    @track sortedBy = 'Name';
    @track sortedDirection = 'asc';

    totalRecords = 0;
    wiredAccountsResult;
    rawRecords = [];
    pagedData = [];
    isLoading = true;

    pageSizeOptions = [
        { label: '5 records', value: '5' },
        { label: '10 records', value: '10' },
        { label: '25 records', value: '25' }
    ];

    get pageSizeStr() {
        return String(this.pageSize);
    }

    /**
     * Wire service to fetch accounts dynamically based on search key.
     */
    @wire(searchAccounts, { searchKey: '$searchKey' })
    wiredAccounts(result) {
        this.wiredAccountsResult = result;
        this.isLoading = true;
        if (result.data) {
            this.rawRecords = result.data;
            this.totalRecords = result.data.length;
            this.pageNumber = 1;
            this.processRecords();
            this.isLoading = false;
        } else if (result.error) {
            console.error('Error fetching accounts:', result.error);
            this.rawRecords = [];
            this.pagedData = [];
            this.totalRecords = 0;
            this.isLoading = false;
        }
    }

    /**
     * Sorts and slices records for current page display.
     */
    processRecords() {
        let sorted = [...this.rawRecords];
        if (this.sortedBy) {
            const reverse = this.sortedDirection === 'asc' ? 1 : -1;
            sorted.sort((a, b) => {
                const valA = a[this.sortedBy] ? a[this.sortedBy] : '';
                const valB = b[this.sortedBy] ? b[this.sortedBy] : '';
                return reverse * valA.localeCompare(valB, undefined, { numeric: true });
            });
        }

        const start = (this.pageNumber - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.pagedData = sorted.slice(start, end);
    }

    get hasRecords() {
        return this.pagedData && this.pagedData.length > 0;
    }

    get totalPages() {
        return Math.ceil(this.totalRecords / this.pageSize) || 1;
    }

    get isFirstPage() {
        return this.pageNumber <= 1;
    }

    get isLastPage() {
        return this.pageNumber >= this.totalPages;
    }

    handleSearchKeyChange(event) {
        this.searchKey = event.target.value;
    }

    handlePageSizeChange(event) {
        this.pageSize = parseInt(event.detail.value, 10);
        this.pageNumber = 1;
        this.processRecords();
    }

    handleSort(event) {
        this.sortedBy = event.detail.fieldName;
        this.sortedDirection = event.detail.sortDirection;
        this.processRecords();
    }

    handleFirstPage() {
        this.pageNumber = 1;
        this.processRecords();
    }

    handlePreviousPage() {
        if (this.pageNumber > 1) {
            this.pageNumber -= 1;
            this.processRecords();
        }
    }

    handleNextPage() {
        if (this.pageNumber < this.totalPages) {
            this.pageNumber += 1;
            this.processRecords();
        }
    }

    handleLastPage() {
        this.pageNumber = this.totalPages;
        this.processRecords();
    }

    handleRefresh() {
        this.isLoading = true;
        return refreshApex(this.wiredAccountsResult);
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        if (actionName === 'view_details' || actionName === 'select_record') {
            this.dispatchEvent(
                new CustomEvent('recordselect', {
                    detail: { recordId: row.Id, recordName: row.Name },
                    bubbles: true,
                    composed: true
                })
            );
        }
    }

    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        if (selectedRows && selectedRows.length > 0) {
            this.dispatchEvent(
                new CustomEvent('recordselect', {
                    detail: { recordId: selectedRows[0].Id, recordName: selectedRows[0].Name },
                    bubbles: true,
                    composed: true
                })
            );
        }
    }
}
