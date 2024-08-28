document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        let valid = true;
        
        // Clear previous errors
        clearErrors();

        // Validate username
        if (username === '') {
            showError('username', 'Username is required');
            valid = false;
        }

        // Validate password
        if (password === '') {
            showError('password', 'Password is required');
            valid = false;
        }

        // Validate email
        if (email === '') {
            showError('email', 'Email is required');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'Invalid email format');
            valid = false;
        }

        // Validate phone number
        if (phone === '') {
            showError('phone', 'Phone number is required');
            valid = false;
        }

        // Prevent form submission if invalid
        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement('span');
        error.className = 'error-message';
        error.textContent = message;
        field.parentElement.appendChild(error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
