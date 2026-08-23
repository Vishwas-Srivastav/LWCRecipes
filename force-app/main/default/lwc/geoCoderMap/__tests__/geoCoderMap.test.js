import { createElement } from 'lwc';
import GeoCoderMap from 'c/geoCoderMap';

describe('c-geo-coder-map', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders map element', () => {
    const element = createElement('c-geo-coder-map', {
      is: GeoCoderMap
    });
    document.body.appendChild(element);

    const map = element.shadowRoot.querySelector('lightning-map');
    expect(map).not.toBeNull();
  });
});
