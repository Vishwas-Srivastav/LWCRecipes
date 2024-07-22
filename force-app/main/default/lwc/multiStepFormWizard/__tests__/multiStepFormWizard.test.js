import { createElement } from 'lwc';
import MultiStepFormWizard from 'c/multiStepFormWizard';

describe('c-multi-step-form-wizard', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders step progress indicator', () => {
        const element = createElement('c-multi-step-form-wizard', {
            is: MultiStepFormWizard
        });
        document.body.appendChild(element);

        const indicator = element.shadowRoot.querySelector('lightning-progress-indicator');
        expect(indicator).not.toBeNull();
    });
});
