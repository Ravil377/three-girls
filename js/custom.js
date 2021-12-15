(function (factory) {
    typeof define === 'function' && define.amd ? define('custom', factory) :
    factory();
})((function () { 'use strict';

    const modal = document.querySelector('.modal');
    const signUp = document.querySelector('.js-button-signup');
    const inputs = document.querySelectorAll('.form__input');
    inputs.forEach(input => {
      input.addEventListener('focus', e => {
        e.target.closest('.form__label').classList.add('form__label_active');
      });
    });
    signUp.addEventListener('click', () => {
      modal.classList.add('modal_opened');
    });

}));
