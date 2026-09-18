// Close the mobile menu when a link is clicked or when the viewport is resized to desktop.
(function () {
  var toggle = document.getElementById('nav-toggle');
  if (!toggle) return;
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    a.addEventListener('click', function () { toggle.checked = false; });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) toggle.checked = false;
  });
})();
