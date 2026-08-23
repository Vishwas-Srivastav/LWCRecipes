import { createElement } from 'lwc';
import ApexImperativeParams from 'c/apexImperativeParams';

jest.mock(
  '@salesforce/apex/AccountController.getAccounts',
  () => {
    return {
      default: jest.fn(() => Promise.resolve([]))
    };
  },
  { virtual: true }
);

describe('c-apex-imperative-params', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders input elements correctly', () => {
    const element = createElement('c-apex-imperative-params', {
      is: ApexImperativeParams
    });
    document.body.appendChild(element);

    const inputs = element.shadowRoot.querySelectorAll('lightning-input');
    expect(inputs.length).toBe(2);
  });
});
