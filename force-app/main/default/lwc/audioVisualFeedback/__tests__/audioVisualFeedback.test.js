import { createElement } from 'lwc';
import AudioVisualFeedback from 'c/audioVisualFeedback';

describe('c-audio-visual-feedback', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders simulate button', () => {
    const element = createElement('c-audio-visual-feedback', {
      is: AudioVisualFeedback
    });
    document.body.appendChild(element);

    const button = element.shadowRoot.querySelector('lightning-button');
    expect(button).not.toBeNull();
  });
});
