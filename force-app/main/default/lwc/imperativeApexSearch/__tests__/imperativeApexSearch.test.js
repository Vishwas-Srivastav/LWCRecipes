import { createElement } from 'lwc';
import ImperativeApexSearch from 'c/imperativeApexSearch';

jest.mock(
  '@salesforce/apex/ContactController.searchContacts',
  () => {
    return {
      default: jest.fn(() => Promise.resolve([]))
    };
  },
  { virtual: true }
);

describe('c-imperative-apex-search', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.clearAllMocks();
  });

  it('renders input element on load', () => {
    const element = createElement('c-imperative-apex-search', {
      is: ImperativeApexSearch
    });
    document.body.appendChild(element);

    const input = element.shadowRoot.querySelector('lightning-input');
    expect(input).not.toBeNull();
  });
});
