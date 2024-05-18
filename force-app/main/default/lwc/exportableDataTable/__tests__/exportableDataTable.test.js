import { createElement } from 'lwc';
import ExportableDataTable from 'c/exportableDataTable';

describe('c-exportable-data-table', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders export button correctly', () => {
        const element = createElement('c-exportable-data-table', {
            is: ExportableDataTable
        });
        document.body.appendChild(element);

        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull();
    });
});
