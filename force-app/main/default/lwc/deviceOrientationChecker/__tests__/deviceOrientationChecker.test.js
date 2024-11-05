import { createElement } from 'lwc';
import DeviceOrientationChecker from 'c/deviceOrientationChecker';

describe('c-device-orientation-checker', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders form factor container', () => {
        const element = createElement('c-device-orientation-checker', {
            is: DeviceOrientationChecker
        });
        document.body.appendChild(element);

        const card = element.shadowRoot.querySelector('lightning-card');
        expect(card).not.toBeNull();
    });
});
