import { createElement } from 'lwc';
import LookupSearchComponent from 'c/lookupSearchComponent';

jest.mock(
  '@salesforce/apex/AccountController.searchAccounts',
  () => {
    const { createApexTestWireAdapter } = require('@salesforce/sfdx-lwc-jest');
    return {
      default: createApexTestWireAdapter(jest.fn())
    };
  },
  { virtual: true }
);

describe('c-lookup-search-component', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders lookup search input', () => {
    const element = createElement('c-lookup-search-component', {
      is: LookupSearchComponent
    });
    document.body.appendChild(element);

    const input = element.shadowRoot.querySelector('lightning-input');
    expect(input).not.toBeNull();
  });
});
