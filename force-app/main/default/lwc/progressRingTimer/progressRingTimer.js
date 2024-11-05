import { LightningElement, track } from 'lwc';

export default class ProgressRingTimer extends LightningElement {
    @track progressValue = 75;

    handleResetTimer() {
        this.progressValue = 0;
    }
}
