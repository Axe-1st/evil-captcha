const checkbox = document.getElementById('captcha-checkbox');
const text = document.getElementById('captcha-text');
const popup = document.getElementById('popup');

let attempts = 0;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    attempts++;

    if (attempts === 1) {
      text.textContent = 'Verifying...';
      text.style.color = '#333';

      setTimeout(() => {
        popup.classList.remove('hidden');
        text.textContent = '';
        checkbox.checked = false;
      }, 1000);

    } else if (attempts === 2) {
      text.textContent = 'Try again.';
      text.style.color = '#d00';
      checkbox.checked = false;

    } else {
      text.textContent = 'YOU WILL NEVER ESCAPE THE CAPTCHA.';
      document.body.classList.add('dark-mode');
      popup.classList.add('hidden');
    }
  }
});
