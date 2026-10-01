// Contact form: sends the message to your email through Formspree.
var form = document.getElementById('contact-form');
var statusEl = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  statusEl.className = '';
  statusEl.textContent = 'Sending...';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function (res) {
    if (res.ok) {
      form.reset();
      statusEl.className = 'ok';
      statusEl.textContent = 'Thanks! Your message is on its way.';
    } else {
      statusEl.className = 'err';
      statusEl.textContent = 'Something went wrong. Please email me directly instead.';
    }
  }).catch(function () {
    statusEl.className = 'err';
    statusEl.textContent = 'Could not send. Check your connection and try again.';
  });
});
