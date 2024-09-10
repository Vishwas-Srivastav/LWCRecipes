import { createElement } from 'lwc';
import GlobalStateStore from 'c/globalStateStore';

describe('c-global-state-store', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders state store counter element', () => {
        const element = createElement('c-global-state-store', {
            is: GlobalStateStore
        });
        document.body.appendChild(element);

        const card = element.shadowRoot.querySelector('lightning-card');
        expect(card).not.toBeNull();
    });
});
