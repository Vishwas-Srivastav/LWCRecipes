import { LightningElement, track } from 'lwc';

export default class DeviceOrientationChecker extends LightningElement {
    @track formFactor = 'Desktop (Large Screen)';

    connectedCallback() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        if (window.innerWidth < 768) {
            this.formFactor = 'Mobile (Small Screen)';
        } else if (window.innerWidth < 1024) {
            this.formFactor = 'Tablet (Medium Screen)';
        } else {
            this.formFactor = 'Desktop (Large Screen)';
        }
    }
}
