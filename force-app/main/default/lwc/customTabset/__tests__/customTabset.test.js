import { createElement } from 'lwc';
import CustomTabset from 'c/customTabset';

describe('c-custom-tabset', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders tabset container', () => {
        const element = createElement('c-custom-tabset', {
            is: CustomTabset
        });
        document.body.appendChild(element);

        const tabset = element.shadowRoot.querySelector('lightning-tabset');
        expect(tabset).not.toBeNull();
    });
});
