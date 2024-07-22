import { createElement } from 'lwc';
import CustomModal from 'c/customModal';

describe('c-custom-modal', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('is closed by default and opens via openModal() API', async () => {
        const element = createElement('c-custom-modal', {
            is: CustomModal
        });
        document.body.appendChild(element);

        expect(element.shadowRoot.querySelector('section')).toBeNull();

        element.openModal();
        await Promise.resolve();

        const section = element.shadowRoot.querySelector('section');
        expect(section).not.toBeNull();
    });

    it('closes on Escape key down', async () => {
        const element = createElement('c-custom-modal', {
            is: CustomModal
        });
        document.body.appendChild(element);

        element.openModal();
        await Promise.resolve();

        const section = element.shadowRoot.querySelector('section');
        section.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

        await Promise.resolve();

        expect(element.shadowRoot.querySelector('section')).toBeNull();
    });
});
