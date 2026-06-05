let isSubmitted = false;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!isSubmitted) {
      isSubmitted = true;
      document.getElementById('submit').disabled = true;
      document.getElementById('submit').classList.add('disabled');

      const formData = new FormData(document.getElementById('form'));

      try {
        const response = await fetch('/submit/', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error(response.status);
        }

        const responseText = await response.text();

        document.getElementById('theDiv').textContent = responseText;
      } catch (error) {
        document.getElementById('theDiv').textContent = `ERROR: ${error.message}`;
      }
    }

    return;
  });

  return;
});
