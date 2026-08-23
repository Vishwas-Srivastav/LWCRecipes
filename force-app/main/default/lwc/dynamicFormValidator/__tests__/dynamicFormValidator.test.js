import { createElement } from 'lwc';
import DynamicFormValidator from 'c/dynamicFormValidator';

describe('c-dynamic-form-validator', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders initial form inputs correctly', () => {
    const element = createElement('c-dynamic-form-validator', {
      is: DynamicFormValidator
    });
    document.body.appendChild(element);

    const inputs = element.shadowRoot.querySelectorAll('lightning-input');
    expect(inputs.length).toBeGreaterThanOrEqual(2);
  });

  it('resets form state when reset button is clicked', async () => {
    const element = createElement('c-dynamic-form-validator', {
      is: DynamicFormValidator
    });
    document.body.appendChild(element);

    await Promise.resolve();

    const buttons = Array.from(element.shadowRoot.querySelectorAll('lightning-button'));
    const resetButton = buttons.find((b) => b.label === 'Reset Form');
    expect(resetButton).toBeDefined();

    resetButton.dispatchEvent(new CustomEvent('click'));
    await Promise.resolve();

    const inputs = element.shadowRoot.querySelectorAll('lightning-input');
    expect(inputs[0].value).toBe('');
  });
});
