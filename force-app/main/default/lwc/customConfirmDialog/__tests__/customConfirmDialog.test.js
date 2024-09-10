import { createElement } from 'lwc';
import CustomConfirmDialog from 'c/customConfirmDialog';

describe('c-custom-confirm-dialog', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders delete trigger button', () => {
        const element = createElement('c-custom-confirm-dialog', {
            is: CustomConfirmDialog
        });
        document.body.appendChild(element);

        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull();
    });
});
