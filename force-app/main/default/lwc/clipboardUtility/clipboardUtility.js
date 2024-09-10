import { LightningElement, track } from 'lwc';

export default class ClipboardUtility extends LightningElement {
    textToCopy = '001100000001ACME-KEY-2026';
    @track copied = false;

    get buttonLabel() {
        return this.copied ? 'Copied!' : 'Copy Text';
    }

    get buttonVariant() {
        return this.copied ? 'success' : 'brand';
    }

    handleCopy() {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(this.textToCopy).then(() => {
                this.copied = true;
                setTimeout(() => { this.copied = false; }, 2000);
            });
        }
    }
}
