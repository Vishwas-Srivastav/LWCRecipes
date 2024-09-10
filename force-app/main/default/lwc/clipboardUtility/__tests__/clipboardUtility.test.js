import { createElement } from 'lwc';
import ClipboardUtility from 'c/clipboardUtility';

describe('c-clipboard-utility', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders input element with text to copy', () => {
        const element = createElement('c-clipboard-utility', {
            is: ClipboardUtility
        });
        document.body.appendChild(element);

        const input = element.shadowRoot.querySelector('lightning-input');
        expect(input).not.toBeNull();
    });
});
