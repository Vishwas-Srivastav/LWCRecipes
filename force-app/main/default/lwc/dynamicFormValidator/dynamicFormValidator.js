import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

/**
 * Recipe: Dynamic Form Validator
 * Demonstrates:
 * - Custom input validation using setCustomValidity & reportValidity
 * - Conditional field requirement based on picklist selection
 * - Form reset & validity clearing
 * - Standard ShowToastEvent integration upon submission success
 */
export default class DynamicFormValidator extends LightningElement {
  @track formData = {
    fullName: '',
    email: '',
    category: 'Standard',
    revenue: '',
    taxId: ''
  };

  categoryOptions = [
    { label: 'Standard Customer', value: 'Standard' },
    { label: 'Partner', value: 'Partner' },
    { label: 'Enterprise', value: 'Enterprise' }
  ];

  get isEnterpriseCategory() {
    return this.formData.category === 'Enterprise';
  }

  handleInputChange(event) {
    const field = event.target.name;
    this.formData[field] = event.target.value;

    // Clear custom validity error as user types
    event.target.setCustomValidity('');
    event.target.reportValidity();
  }

  handleSubmit(event) {
    event.preventDefault();

    const allValid = this.validateFormInputs();

    if (allValid) {
      this.dispatchEvent(
        new ShowToastEvent({
          title: 'Success!',
          message: `Lead "${this.formData.fullName}" submitted successfully.`,
          variant: 'success'
        })
      );
      this.handleReset();
    } else {
      this.dispatchEvent(
        new ShowToastEvent({
          title: 'Form Validation Error',
          message: 'Please resolve the highlighted errors before submitting.',
          variant: 'error'
        })
      );
    }
  }

  validateFormInputs() {
    const inputs = [...this.template.querySelectorAll('lightning-input, lightning-combobox')];

    inputs.forEach((input) => {
      // Business rule: Enterprise Tax ID format validation (XX-XXXXXXX)
      if (input.name === 'taxId' && this.isEnterpriseCategory) {
        const taxIdRegex = /^\d{2}-\d{7}$/;
        if (!taxIdRegex.test(input.value)) {
          input.setCustomValidity('Tax ID must match format XX-XXXXXXX (e.g. 12-3456789)');
        } else {
          input.setCustomValidity('');
        }
      }

      // Business rule: Full Name must contain at least 2 words
      if (input.name === 'fullName') {
        if (input.value && input.value.trim().split(/\s+/).length < 2) {
          input.setCustomValidity('Please enter both first and last name.');
        } else {
          input.setCustomValidity('');
        }
      }
    });

    // Trigger native reportValidity across all inputs
    return inputs.reduce((validSoFar, inputCmp) => {
      inputCmp.reportValidity();
      return validSoFar && inputCmp.checkValidity();
    }, true);
  }

  handleReset() {
    this.formData = {
      fullName: '',
      email: '',
      category: 'Standard',
      revenue: '',
      taxId: ''
    };

    const inputs = [...this.template.querySelectorAll('lightning-input, lightning-combobox')];
    inputs.forEach((input) => {
      input.setCustomValidity('');
      input.reportValidity();
    });
  }
}
