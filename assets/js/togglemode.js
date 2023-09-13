document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    var icon = document.getElementById('dark-mode-icon');
    
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('light-mode', 'enabled');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      icon.style.color = '#f39c12'; // yellw for sun
    } else {
      localStorage.setItem('light-mode', 'disabled');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      icon.style.color = '#ffffff'; // white for moon
    }
  });
  
  if (localStorage.getItem('light-mode') === 'enabled') {
    document.body.classList.add('light-mode');
    var icon = document.getElementById('dark-mode-icon');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    icon.style.color = '#f39c12'; // yellow for sun
  } else if (localStorage.getItem('light-mode') === null) {
    localStorage.setItem('light-mode', 'enabled');
    document.body.classList.add('light-mode');
    var icon = document.getElementById('dark-mode-icon');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    icon.style.color = '#f39c12'; // yellow for sun
  }
  