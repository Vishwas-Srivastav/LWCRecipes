import { LightningElement, api, track } from 'lwc';

export default class FileUploadHandler extends LightningElement {
    @api recordId = '001000000000000AAA';
    @track uploadedFiles = [];

    get acceptedFormats() {
        return ['.pdf', '.png', '.jpg', '.jpeg', '.docx'];
    }

    get hasUploadedFiles() {
        return this.uploadedFiles && this.uploadedFiles.length > 0;
    }

    get uploadedFilesCount() {
        return this.uploadedFiles.length;
    }

    handleUploadFinished(event) {
        const files = event.detail.files;
        files.forEach((file) => {
            this.uploadedFiles.push({
                name: file.name,
                documentId: file.documentId
            });
        });
    }
}
