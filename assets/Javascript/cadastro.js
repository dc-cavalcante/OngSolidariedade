function initializeFormValidation() {
    const form = document.getElementById('registration-form');
    const globalAlert = document.getElementById('global-alert');
    const inputs = form ? form.querySelectorAll('input, select') : []; 

    function resetFormState() {
        if (globalAlert) {
            globalAlert.classList.add('hidden');
        }
        inputs.forEach(input => {
            input.classList.remove('input-error');
            const errorMessage = input.parentElement.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
        });
    }

    function validateInput(input) {
        const isValid = input.checkValidity();
        const errorMessage = input.parentElement.querySelector('.error-message');

        if (!isValid) {
            input.classList.add('input-error');
        } else {
            input.classList.remove('input-error');
        }

        if (errorMessage) {
            errorMessage.style.display = isValid ? 'none' : 'block';
        }
        return isValid;
    }

    if (form) {
        resetFormState();

        form.addEventListener('submit', function(event) {
            let isFormValid = true;
            
            inputs.forEach(input => {
                if (!validateInput(input)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                event.preventDefault();
                
                if (globalAlert) {
                    globalAlert.classList.remove('hidden');
                    globalAlert.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                event.preventDefault(); 
                
                if (globalAlert) {
                    globalAlert.classList.add('hidden');
                }
                
                
                localStorage.setItem('user_status', 'registered'); 
                window.location.hash = 'cadastro-sucesso'; 
            }
        });

        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateInput(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('input-error')) {
                    validateInput(this);
                }
            });
        });
    }
}