import { createElement } from 'lwc';
import ApexContinuation from 'c/apexContinuation';

describe('c-apex-continuation', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders continuation trigger button', () => {
    const element = createElement('c-apex-continuation', {
      is: ApexContinuation
    });
    document.body.appendChild(element);

    const button = element.shadowRoot.querySelector('lightning-button');
    expect(button).not.toBeNull();
  });
});
