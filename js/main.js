(function () {
  'use strict';

  /* ===== Mobile Nav Toggle ===== */
  var toggle = document.querySelector('.nav__toggle');
  var navLinks = document.querySelector('.nav__links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('nav__links--open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.nav__links a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
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

  /* ===== Contact Form Validation ===== */
  var form = document.getElementById('contact-form');
  if (form) {
    var fields = [
      { id: 'form-name', errorId: 'form-name', validate: function (v) { return v.trim().length > 0; }, msg: 'Please enter your name.' },
      { id: 'form-email', errorId: 'form-email', validate: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }, msg: 'Please enter a valid email address.' },
      { id: 'form-message', errorId: 'form-message', validate: function (v) { return v.trim().length > 0; }, msg: 'Please enter a message.' }
    ];

    function showError(fieldId, message) {
      var input = document.getElementById(fieldId);
      var errorSpan = input.parentNode.querySelector('.contact-form__error');
      if (input) input.classList.add('contact-form__input--error');
      if (errorSpan) errorSpan.textContent = message;
    }

    function clearError(fieldId) {
      var input = document.getElementById(fieldId);
      var errorSpan = input.parentNode.querySelector('.contact-form__error');
      if (input) input.classList.remove('contact-form__input--error');
      if (errorSpan) errorSpan.textContent = '';
    }

    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      if (input) {
        input.addEventListener('blur', function () {
          if (f.validate(input.value)) {
            clearError(f.id);
          } else {
            showError(f.id, f.msg);
          }
        });
        input.addEventListener('input', function () {
          if (input.classList.contains('contact-form__input--error') && f.validate(input.value)) {
            clearError(f.id);
          }
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      fields.forEach(function (f) {
        var input = document.getElementById(f.id);
        if (input) {
          if (f.validate(input.value)) {
            clearError(f.id);
          } else {
            showError(f.id, f.msg);
            valid = false;
          }
        }
      });

      if (valid) {
        var successMsg = document.querySelector('.contact-form__success');
        if (successMsg) {
          successMsg.hidden = false;
        }
        form.reset();
        fields.forEach(function (f) { clearError(f.id); });
      }
    });
  }

})();