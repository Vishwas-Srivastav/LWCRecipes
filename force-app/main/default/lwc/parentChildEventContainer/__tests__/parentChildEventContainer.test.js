import { createElement } from 'lwc';
import ParentChildEventContainer from 'c/parentChildEventContainer';

describe('c-parent-child-event-container', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders button element', () => {
        const element = createElement('c-parent-child-event-container', {
            is: ParentChildEventContainer
        });
        document.body.appendChild(element);

        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button).not.toBeNull();
    });
});
