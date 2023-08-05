document.querySelector('.submit').addEventListener('click', function(event) {
    // Prevent the link from doing anything
  event.preventDefault();
  
    // Get the form element
  var form = document.getElementById('contactForm');

  // Get all input elements
  var inputs = form.getElementsByTagName('input');
  var textarea = form.getElementsByTagName('textarea');

  // Loop through inputs
  for (var i = 0; i < inputs.length; i++) {
    // If an input is empty
    if (inputs[i].value === '') {
      // Prevent form submission
      event.preventDefault();
      alert('Please fill out all fields before submitting.');
      return;
    }
  }

  // Check if textarea is empty
  if (textarea[0].value === '') {
    // Prevent form submission
    event.preventDefault();
    alert('Please fill out all fields before submitting.');
    return;
  }

  form.submit();
  window.location.href = "success.html";
});

