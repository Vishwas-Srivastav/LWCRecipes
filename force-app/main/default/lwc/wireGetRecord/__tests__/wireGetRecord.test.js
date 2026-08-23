import { createElement } from 'lwc';
import WireGetRecord from 'c/wireGetRecord';

describe('c-wire-get-record', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders card container', () => {
    const element = createElement('c-wire-get-record', {
      is: WireGetRecord
    });
    document.body.appendChild(element);

    const card = element.shadowRoot.querySelector('lightning-card');
    expect(card).not.toBeNull();
  });
});
