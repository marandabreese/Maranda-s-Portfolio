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

    var closeTimer;
    dropdown.addEventListener('mouseenter', function () {
      clearTimeout(closeTimer);
      dropdown.classList.add('open');
    });
    dropdown.addEventListener('mouseleave', function () {
      closeTimer = setTimeout(function () {
        dropdown.classList.remove('open');
      }, 500);
    });
  }

  var mobileToggle = document.querySelector('.mobile-toggle');
  var mainNav = document.querySelector('.main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function () {
      mainNav.classList.toggle('mobile-open');
    });
  }

  var galleryImgs = document.querySelectorAll('.gallery img');
  var imgModal = document.getElementById('img-modal');
  if (galleryImgs.length && imgModal) {
    var modalImg = imgModal.querySelector('img');
    var modalClose = imgModal.querySelector('.img-modal-close');

    var closeModal = function () {
      imgModal.classList.remove('open');
      modalImg.src = '';
    };

    galleryImgs.forEach(function (img) {
      img.addEventListener('click', function () {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        imgModal.classList.add('open');
      });
    });

    modalClose.addEventListener('click', closeModal);
    imgModal.addEventListener('click', function (e) {
      if (e.target === imgModal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }
});
