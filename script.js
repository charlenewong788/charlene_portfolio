const year = document.querySelector('#year');
const copyButton = document.querySelector('.copy-button');
const copyStatus = document.querySelector('.copy-status');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = `${email} copied to clipboard.`;
    } catch {
      copyStatus.textContent = `Email: ${email}`;
    }
  });
}
