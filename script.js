document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById('captcha-checkbox');
  const text = document.getElementById('captcha-text');
  const captchaBox = document.querySelector("#captcha-box");
  let attempts = 0;

  if (checkbox) {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        attempts++;

        if (attempts < 3) {
          // Fail the first 2 attempts
          text.textContent = 'Try again.';
          text.style.color = '#d00';
          checkbox.checked = false;

        } else {
          // Third time = trap
          text.textContent = 'Verifying...';
          text.style.color = '#333';

          setTimeout(() => {
            document.body.classList.add('dark-mode');
            text.textContent = 'YOU WILL NEVER ESCAPE THE CAPTCHA.';
            text.style.color = 'red';
            text.style.fontWeight = 'bold';
          }, 1500);
        }
      }
    });
  }

  if (captchaBox) {
    captchaBox.addEventListener("click", () => {
      // your logic here if needed
    });
  }
});
