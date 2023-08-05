document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Get all input elements
  var inputs = this.getElementsByTagName('email');
  var textarea = this.getElementsByTagName('message');

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
});
