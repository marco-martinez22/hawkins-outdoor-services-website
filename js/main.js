(function () {
  'use strict';

  /* ===== Mobile Nav Toggle ===== */
  var toggle = document.querySelector('.nav__toggle');
  var navLinks = document.querySelector('.nav__links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('nav__links--open');
      toggle.setAttribute('aria-expanded', isOpen);
      // visual state for hamburger (animate to X) and prevent background scrolling
      if (isOpen) {
        toggle.classList.add('nav__toggle--open');
        document.documentElement.classList.add('no-scroll');
        document.body.classList.add('no-scroll');
      } else {
        toggle.classList.remove('nav__toggle--open');
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');
      }
    });

    document.querySelectorAll('.nav__links a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('nav__toggle--open');
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  /* ===== Nav scroll effect ===== */
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    });
  }


  /* ===== Before/After Slider ===== */
  function initBeforeAfter() {
    document.querySelectorAll('.ba-slider').forEach(function (slider) {
      var range = slider.querySelector('.ba-range');
      var after = slider.querySelector('.ba-after');
      function updateClip() {
        var value = range.value;
        after.style.clipPath = 'inset(0 ' + (100 - value) + '% 0 0)';
      }
      range.addEventListener('input', updateClip);
      updateClip();
    });
  }
  document.addEventListener('DOMContentLoaded', initBeforeAfter);

})();
