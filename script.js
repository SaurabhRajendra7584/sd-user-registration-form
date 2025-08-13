// Form validation and localStorage functionality
class FormValidator {
    constructor() {
        this.form = document.getElementById('registrationForm');
        this.fields = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            password: document.getElementById('password'),
            confirmPassword: document.getElementById('confirmPassword'),
            dateOfBirth: document.getElementById('dateOfBirth'),
            phone: document.getElementById('phone')
        };
        this.errors = {
            name: document.getElementById('nameError'),
            email: document.getElementById('emailError'),
            password: document.getElementById('passwordError'),
            confirmPassword: document.getElementById('confirmPasswordError'),
            dateOfBirth: document.getElementById('dateOfBirthError'),
            phone: document.getElementById('phoneError')
        };
        this.submitBtn = document.getElementById('submitBtn');
        this.successMessage = document.getElementById('successMessage');
        this.retrieveBtn = document.getElementById('retrieveBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.storedData = document.getElementById('storedData');
        this.dataDisplay = document.getElementById('dataDisplay');

        this.initializeEventListeners();
        this.checkStoredData();
    }

    initializeEventListeners() {
        // Real-time validation on input
        Object.keys(this.fields).forEach(fieldName => {
            this.fields[fieldName].addEventListener('input', () => {
                this.validateField(fieldName);
                this.updateSubmitButton();
            });

            this.fields[fieldName].addEventListener('blur', () => {
                this.validateField(fieldName);
            });
        });

        // Special handling for password field to show requirements
        this.fields.password.addEventListener('input', () => {
            this.updatePasswordRequirements();
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Retrieve and clear data buttons
        this.retrieveBtn.addEventListener('click', () => {
            this.displayStoredData();
        });

        this.clearBtn.addEventListener('click', () => {
            this.clearStoredData();
        });
    }

    validateField(fieldName) {
        const field = this.fields[fieldName];
        const error = this.errors[fieldName];
        let isValid = true;
        let errorMessage = '';

        // Clear previous styling
        field.classList.remove('valid', 'invalid');
        error.classList.remove('show');

        switch (fieldName) {
            case 'name':
                if (!field.value.trim()) {
                    errorMessage = 'Name is required';
                    isValid = false;
                } else if (field.value.trim().length < 2) {
                    errorMessage = 'Name must be at least 2 characters';
                    isValid = false;
                } else if (!/^[a-zA-Z\s]+$/.test(field.value.trim())) {
                    errorMessage = 'Name can only contain letters and spaces';
                    isValid = false;
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!field.value.trim()) {
                    errorMessage = 'Email is required';
                    isValid = false;
                } else if (!emailRegex.test(field.value.trim())) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                break;

            case 'password':
                const password = field.value;
                const requirements = this.getPasswordRequirements(password);
                
                if (!password) {
                    errorMessage = 'Password is required';
                    isValid = false;
                } else if (!requirements.isValid) {
                    errorMessage = 'Password does not meet requirements';
                    isValid = false;
                }
                break;

            case 'confirmPassword':
                if (!field.value) {
                    errorMessage = 'Please confirm your password';
                    isValid = false;
                } else if (field.value !== this.fields.password.value) {
                    errorMessage = 'Passwords do not match';
                    isValid = false;
                }
                break;

            case 'dateOfBirth':
                if (!field.value) {
                    errorMessage = 'Date of birth is required';
                    isValid = false;
                } else {
                    const birthDate = new Date(field.value);
                    const today = new Date();
                    const age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }
                    
                    if (birthDate > today) {
                        errorMessage = 'Date of birth cannot be in the future';
                        isValid = false;
                    } else if (age < 13) {
                        errorMessage = 'You must be at least 13 years old';
                        isValid = false;
                    } else if (age > 120) {
                        errorMessage = 'Please enter a valid date of birth';
                        isValid = false;
                    }
                }
                break;

            case 'phone':
                // Phone is optional, but if provided, validate format
                if (field.value.trim()) {
                    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                    if (!phoneRegex.test(field.value.replace(/[\s\-\(\)]/g, ''))) {
                        errorMessage = 'Please enter a valid phone number';
                        isValid = false;
                    }
                }
                break;
        }

        // Update UI
        if (isValid && field.value.trim()) {
            field.classList.add('valid');
        } else if (!isValid) {
            field.classList.add('invalid');
            error.textContent = errorMessage;
            error.classList.add('show');
        }

        return isValid;
    }

    getPasswordRequirements(password) {
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        requirements.isValid = Object.values(requirements).every(req => req);
        return requirements;
    }

    updatePasswordRequirements() {
        const password = this.fields.password.value;
        const requirements = this.getPasswordRequirements(password);

        // Update visual indicators
        const indicators = {
            length: document.getElementById('length'),
            uppercase: document.getElementById('uppercase'),
            lowercase: document.getElementById('lowercase'),
            number: document.getElementById('number'),
            special: document.getElementById('special')
        };

        Object.keys(indicators).forEach(req => {
            if (requirements[req]) {
                indicators[req].classList.add('valid');
            } else {
                indicators[req].classList.remove('valid');
            }
        });
    }

    updateSubmitButton() {
        // Check if all required fields are valid
        const requiredFields = ['name', 'email', 'password', 'confirmPassword', 'dateOfBirth'];
        const allValid = requiredFields.every(fieldName => this.validateField(fieldName));
        
        this.submitBtn.disabled = !allValid;
    }

    handleSubmit() {
        // Final validation
        let allValid = true;
        Object.keys(this.fields).forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                allValid = false;
            }
        });

        if (allValid) {
            // Collect form data
            const formData = {
                name: this.fields.name.value.trim(),
                email: this.fields.email.value.trim(),
                dateOfBirth: this.fields.dateOfBirth.value,
                phone: this.fields.phone.value.trim() || 'Not provided',
                registrationDate: new Date().toISOString()
            };

            // Store in localStorage
            localStorage.setItem('userRegistrationData', JSON.stringify(formData));

            // Show success message
            this.showSuccessMessage();

            // Reset form
            this.form.reset();
            this.clearValidationClasses();
            this.updateSubmitButton();

            // Update stored data visibility
            this.checkStoredData();
        }
    }

    showSuccessMessage() {
        this.successMessage.style.display = 'block';
        setTimeout(() => {
            this.successMessage.style.display = 'none';
        }, 5000);
    }

    clearValidationClasses() {
        Object.values(this.fields).forEach(field => {
            field.classList.remove('valid', 'invalid');
        });
        Object.values(this.errors).forEach(error => {
            error.textContent = '';
            error.classList.remove('show');
        });
    }

    checkStoredData() {
        const storedData = localStorage.getItem('userRegistrationData');
        if (storedData) {
            this.retrieveBtn.style.display = 'inline-block';
            this.clearBtn.style.display = 'inline-block';
        } else {
            this.retrieveBtn.style.display = 'none';
            this.clearBtn.style.display = 'none';
            this.storedData.style.display = 'none';
        }
    }

    displayStoredData() {
        const storedData = localStorage.getItem('userRegistrationData');
        if (storedData) {
            const data = JSON.parse(storedData);
            const registrationDate = new Date(data.registrationDate);
            
            this.dataDisplay.innerHTML = `
                <div class="data-item">
                    <span class="data-label">Name:</span>
                    <span class="data-value">${data.name}</span>
                </div>
                <div class="data-item">
                    <span class="data-label">Email:</span>
                    <span class="data-value">${data.email}</span>
                </div>
                <div class="data-item">
                    <span class="data-label">Date of Birth:</span>
                    <span class="data-value">${new Date(data.dateOfBirth).toLocaleDateString()}</span>
                </div>
                <div class="data-item">
                    <span class="data-label">Phone:</span>
                    <span class="data-value">${data.phone}</span>
                </div>
                <div class="data-item">
                    <span class="data-label">Registration Date:</span>
                    <span class="data-value">${registrationDate.toLocaleString()}</span>
                </div>
            `;
            this.storedData.style.display = 'block';
        } else {
            alert('No stored registration data found.');
        }
    }

    clearStoredData() {
        if (confirm('Are you sure you want to clear all stored registration data?')) {
            localStorage.removeItem('userRegistrationData');
            this.storedData.style.display = 'none';
            this.checkStoredData();
            alert('Stored data has been cleared.');
        }
    }
}

// Utility functions
function formatPhoneNumber(phone) {
    // Simple phone number formatting for display
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Initialize the form validator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FormValidator();
    
    // Add some nice loading animations
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Add current year to date input max attribute
    const dateInput = document.getElementById('dateOfBirth');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('max', today);
    
    // Set a reasonable min date (120 years ago)
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120);
    dateInput.setAttribute('min', minDate.toISOString().split('T')[0]);
});
