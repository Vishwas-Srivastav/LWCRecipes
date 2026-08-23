import { createElement } from 'lwc';
import AccordionTree from 'c/accordionTree';

describe('c-accordion-tree', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders accordion element', () => {
    const element = createElement('c-accordion-tree', {
      is: AccordionTree
    });
    document.body.appendChild(element);

    const accordion = element.shadowRoot.querySelector('lightning-accordion');
    expect(accordion).not.toBeNull();
  });
});
