import { createElement } from 'lwc';
import LmsPublisher from 'c/lmsPublisher';
import { publish } from 'lightning/messageService';
import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/RecordSelected__c';

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

describe('c-lms-publisher', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('publishes payload when publish button is clicked', async () => {
        const element = createElement('c-lms-publisher', {
            is: LmsPublisher
        });
        document.body.appendChild(element);

        await Promise.resolve();

        const button = element.shadowRoot.querySelector('lightning-button');
        button.click();

        expect(publish).toHaveBeenCalledWith(
            undefined,
            RECORD_SELECTED_CHANNEL,
            {
                recordId: '001100000001ACME',
                recordName: 'Acme Corporation',
                source: 'lmsPublisher'
            }
        );
    });
});
