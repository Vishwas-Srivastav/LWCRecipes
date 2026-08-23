import { createElement } from 'lwc';
import CustomCellDatatable from 'c/customCellDatatable';

describe('c-custom-cell-datatable', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders datatable element', () => {
    const element = createElement('c-custom-cell-datatable', {
      is: CustomCellDatatable
    });
    document.body.appendChild(element);

    const datatable = element.shadowRoot.querySelector('lightning-datatable');
    expect(datatable).not.toBeNull();
  });
});
