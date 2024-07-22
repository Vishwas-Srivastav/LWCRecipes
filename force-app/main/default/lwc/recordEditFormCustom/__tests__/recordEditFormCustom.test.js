import { createElement } from 'lwc';
import RecordEditFormCustom from 'c/recordEditFormCustom';

describe('c-record-edit-form-custom', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders edit form container', () => {
        const element = createElement('c-record-edit-form-custom', {
            is: RecordEditFormCustom
        });
        document.body.appendChild(element);

        const form = element.shadowRoot.querySelector('lightning-record-edit-form');
        expect(form).not.toBeNull();
    });
});
