import { createElement } from 'lwc';
import DynamicComponentLoader from 'c/dynamicComponentLoader';

describe('c-dynamic-component-loader', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders view selector combobox', () => {
        const element = createElement('c-dynamic-component-loader', {
            is: DynamicComponentLoader
        });
        document.body.appendChild(element);

        const combobox = element.shadowRoot.querySelector('lightning-combobox');
        expect(combobox).not.toBeNull();
    });
});
