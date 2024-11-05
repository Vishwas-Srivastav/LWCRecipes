import { createElement } from 'lwc';
import ChartJsDashboard from 'c/chartJsDashboard';

describe('c-chart-js-dashboard', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders progress bar elements', () => {
        const element = createElement('c-chart-js-dashboard', {
            is: ChartJsDashboard
        });
        document.body.appendChild(element);

        const bars = element.shadowRoot.querySelectorAll('lightning-progress-bar');
        expect(bars.length).toBeGreaterThan(0);
    });
});
