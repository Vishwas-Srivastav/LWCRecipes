import { createElement } from 'lwc';
import FileUploadHandler from 'c/fileUploadHandler';

describe('c-file-upload-handler', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders file upload element', () => {
        const element = createElement('c-file-upload-handler', {
            is: FileUploadHandler
        });
        document.body.appendChild(element);

        const uploader = element.shadowRoot.querySelector('lightning-file-upload');
        expect(uploader).not.toBeNull();
    });
});
