import { createElement } from 'lwc';
import WireGetObjectInfo from 'c/wireGetObjectInfo';

describe('c-wire-get-object-info', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders card title correctly', () => {
    const element = createElement('c-wire-get-object-info', {
      is: WireGetObjectInfo
    });
    document.body.appendChild(element);

    const card = element.shadowRoot.querySelector('lightning-card');
    expect(card).not.toBeNull();
  });
});
