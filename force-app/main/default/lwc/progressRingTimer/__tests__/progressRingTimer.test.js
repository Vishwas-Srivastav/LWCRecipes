import { createElement } from 'lwc';
import ProgressRingTimer from 'c/progressRingTimer';

describe('c-progress-ring-timer', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders progress ring element', () => {
        const element = createElement('c-progress-ring-timer', {
            is: ProgressRingTimer
        });
        document.body.appendChild(element);

        const ring = element.shadowRoot.querySelector('lightning-progress-ring');
        expect(ring).not.toBeNull();
    });
});
