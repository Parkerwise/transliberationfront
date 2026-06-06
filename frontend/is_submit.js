var sidemenu = document.getElementById("sidemenu");
var offsetHeight = document.getElementById('bar').offsetHeight-10;
const element = document.getElementById('sidemenu')
function openmenu() {
	sidemenu.style.top=offsetHeight+"px";
	element.classList.toggle('open');
	};
function closemenu(){
	element.classList.toggle('open')
	};
function opendropdown(){
	const div = document.getElementById("options");
	div.classList.toggle('reveal')
}

let isSubmitted = false;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!isSubmitted) {
      isSubmitted = true;
      document.getElementById('submit-button').disabled = true;
      document.getElementById('submit-button').classList.add('disabled');

      const formData = new FormData(document.getElementById('form'));

      try {
        const response = await fetch('/contact/submit/', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error(response.status);
        }

        const responseText = await response.text();

        document.getElementById('response').textContent = responseText;
      } catch (error) {
        document.getElementById('response').textContent = `ERROR: ${error.message}`;
      }
    }

    return;
  });

  return;
});
