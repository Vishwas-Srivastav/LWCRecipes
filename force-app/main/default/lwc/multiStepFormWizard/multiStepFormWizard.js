import { LightningElement, track } from 'lwc';

export default class MultiStepFormWizard extends LightningElement {
  @track currentStep = '1';
  @track wizardData = {
    accountName: '',
    contactEmail: ''
  };

  get isStepOne() {
    return this.currentStep === '1';
  }
  get isStepTwo() {
    return this.currentStep === '2';
  }
  get isStepThree() {
    return this.currentStep === '3';
  }

  get isFirstStep() {
    return this.currentStep === '1';
  }
  get isLastStep() {
    return this.currentStep === '3';
  }

  handleAccountNameChange(event) {
    this.wizardData.accountName = event.target.value;
  }

  handleContactEmailChange(event) {
    this.wizardData.contactEmail = event.target.value;
  }

  handleNext() {
    if (this.currentStep === '1') this.currentStep = '2';
    else if (this.currentStep === '2') this.currentStep = '3';
  }

  handlePrev() {
    if (this.currentStep === '3') this.currentStep = '2';
    else if (this.currentStep === '2') this.currentStep = '1';
  }

  handleSubmit() {
    console.log('Wizard submitted:', JSON.stringify(this.wizardData));
  }
}
