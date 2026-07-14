document.addEventListener('DOMContentLoaded', function () {
  var dropdown = document.querySelector('.nav-dropdown');
  var dropdownBtn = dropdown ? dropdown.querySelector('button') : null;

  if (dropdownBtn) {
    dropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      dropdown.classList.remove('open');
    });
  }

  var mobileToggle = document.querySelector('.mobile-toggle');
  var mainNav = document.querySelector('.main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function () {
      mainNav.classList.toggle('mobile-open');
    });
  }
});
