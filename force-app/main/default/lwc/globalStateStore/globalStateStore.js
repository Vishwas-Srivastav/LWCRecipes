import { LightningElement, track } from 'lwc';

export default class GlobalStateStore extends LightningElement {
    @track counterValue = 0;

    handleIncrement() {
        this.counterValue += 1;
    }

    handleReset() {
        this.counterValue = 0;
    }
}
