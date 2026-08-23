import { createElement } from 'lwc';
import SummaryMetricCards from 'c/summaryMetricCards';

describe('c-summary-metric-cards', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders metric cards container', () => {
    const element = createElement('c-summary-metric-cards', {
      is: SummaryMetricCards
    });
    document.body.appendChild(element);

    const card = element.shadowRoot.querySelector('lightning-card');
    expect(card).not.toBeNull();
  });
});
