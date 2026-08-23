import { createElement } from 'lwc';
import LmsSubscriber from 'c/lmsSubscriber';
import { subscribe } from 'lightning/messageService';

jest.mock(
  'lightning/messageService',
  () => {
    return {
      publish: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
      APPLICATION_SCOPE: 'APPLICATION_SCOPE',
      MessageContext: jest.fn()
    };
  },
  { virtual: true }
);

describe('c-lms-subscriber', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.clearAllMocks();
  });

  it('subscribes on connectedCallback', async () => {
    const element = createElement('c-lms-subscriber', {
      is: LmsSubscriber
    });
    document.body.appendChild(element);

    await Promise.resolve();

    expect(subscribe).toHaveBeenCalled();
  });
});
