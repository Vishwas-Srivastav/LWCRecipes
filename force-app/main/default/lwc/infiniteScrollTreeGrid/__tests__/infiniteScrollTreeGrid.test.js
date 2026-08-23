import { createElement } from 'lwc';
import InfiniteScrollTreeGrid from 'c/infiniteScrollTreeGrid';

describe('c-infinite-scroll-tree-grid', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders tree grid element', () => {
    const element = createElement('c-infinite-scroll-tree-grid', {
      is: InfiniteScrollTreeGrid
    });
    document.body.appendChild(element);

    const treeGrid = element.shadowRoot.querySelector('lightning-tree-grid');
    expect(treeGrid).not.toBeNull();
  });
});
