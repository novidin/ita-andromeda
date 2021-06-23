document.addEventListener('DOMContentLoaded', () => {
  const faqLinkElems = document.querySelectorAll('.faq-item__link');
  const faqBodyElems = document.querySelectorAll('.faq-item__body');

  faqLinkElems.forEach((btn, index) => {
      btn.addEventListener('click', () => {
          if (faqLinkElems[index].classList.contains('faq-item__link_active')) {
          // if (!btn.classList.contains('feature__link_active')) {
              faqBodyElems[index].classList.add('hidden');
              btn.classList.remove('faq-item__link_active');
          } else {
              faqBodyElems.forEach((faqBodyElem) => {
                faqBodyElem.classList.add('hidden');
              })
              faqLinkElems.forEach((faqLinkElem) => {
                faqLinkElem.classList.remove('faq-item__link_active');
              })
              faqBodyElems[index].classList.remove('hidden');
              btn.classList.add('faq-item__link_active');
          }
      })
  })
});