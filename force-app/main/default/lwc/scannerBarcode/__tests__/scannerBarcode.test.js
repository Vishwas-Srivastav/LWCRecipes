import { createElement } from 'lwc';
import ScannerBarcode from 'c/scannerBarcode';

describe('c-scanner-barcode', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders scan trigger button', () => {
        const element = createElement('c-scanner-barcode', {
            is: ScannerBarcode
        });
        document.body.appendChild(element);

        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull();
    });
});
