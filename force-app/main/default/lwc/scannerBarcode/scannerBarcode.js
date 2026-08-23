import { LightningElement, track } from 'lwc';

export default class ScannerBarcode extends LightningElement {
  @track scannedValue = '';

  handleScan() {
    this.scannedValue = 'BARCODE-PRODUCT-987654321';
  }
}
