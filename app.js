document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const frequencySelect = document.getElementById('frequency');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const frequencyError = document.getElementById('frequency-error');
  const formMessage = document.getElementById('form-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear previous success message/classes on new submit attempt
    formMessage.textContent = '';
    formMessage.classList.remove('success');

    let hasError = false;
    let firstErrorField = null;

    // 1. Check Name
    const nameVal = nameInput.value.trim();
    if (nameVal === '') {
      nameError.textContent = 'Enter your name.';
      nameInput.setAttribute('aria-invalid', 'true');
      hasError = true;
      if (!firstErrorField) firstErrorField = nameInput;
    } else {
      nameError.textContent = '';
      nameInput.removeAttribute('aria-invalid');
    }

    // 2. Check Email
    const emailVal = emailInput.value.trim();
    if (emailVal === '') {
      emailError.textContent = 'Enter your email address.';
      emailInput.setAttribute('aria-invalid', 'true');
      hasError = true;
      if (!firstErrorField) firstErrorField = emailInput;
    } else if (!emailRegex.test(emailVal)) {
      emailError.textContent = 'Enter an email address like name@example.com.';
      emailInput.setAttribute('aria-invalid', 'true');
      hasError = true;
      if (!firstErrorField) firstErrorField = emailInput;
    } else {
      emailError.textContent = '';
      emailInput.removeAttribute('aria-invalid');
    }

    // 3. Check Frequency
    const freqVal = frequencySelect.value;
    if (freqVal === '') {
      frequencyError.textContent = 'Choose how often we should email you.';
      frequencySelect.setAttribute('aria-invalid', 'true');
      hasError = true;
      if (!firstErrorField) firstErrorField = frequencySelect;
    } else {
      frequencyError.textContent = '';
      frequencySelect.removeAttribute('aria-invalid');
    }

    // Handle results
    if (hasError) {
      firstErrorField.focus();
    } else {
      const userName = nameInput.value.trim();
      formMessage.textContent = `Thank you, ${userName}! You're on the mailing list.`;
      formMessage.classList.add('success');
      form.reset();
    }
  });
});// Project 1: write your form validation in this file.
