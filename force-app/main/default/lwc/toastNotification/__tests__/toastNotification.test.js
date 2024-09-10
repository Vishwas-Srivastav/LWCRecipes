import { createElement } from 'lwc';
import ToastNotification from 'c/toastNotification';

describe('c-toast-notification', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('dispatches ShowToastEvent when showToast method is called', async () => {
        const element = createElement('c-toast-notification', {
            is: ToastNotification
        });
        document.body.appendChild(element);

        const dispatchEventSpy = jest.spyOn(element, 'dispatchEvent');

        await Promise.resolve();

        element.showToast('Success', 'Operation completed successfully.', 'success', 'dismissable');

        await Promise.resolve();

        expect(dispatchEventSpy).toHaveBeenCalled();
        const event = dispatchEventSpy.mock.calls[0][0];
        expect(event.type).toBe('lightning__showtoast');
        expect(event.detail.variant).toBe('success');
        expect(event.detail.title).toBe('Success');
    });
});
