function addAccordion() {
  document.addEventListener('DOMContentLoaded', () => {
    const faqLinkElems = document.querySelectorAll('.faq-item-link');
    const faqBodyElems = document.querySelectorAll('.faq-item-body');
  
    faqLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (faqLinkElems[index].classList.contains('faq-item-link-active')) {
                faqBodyElems[index].classList.add('hidden');
                btn.classList.remove('faq-item-link-active');
            } else {
                faqBodyElems.forEach((faqBodyElem) => {
                  faqBodyElem.classList.add('hidden');
                })
                faqLinkElems.forEach((faqLinkElem) => {
                  faqLinkElem.classList.remove('faq-item-link-active');
                })
                faqBodyElems[index].classList.remove('hidden');
                btn.classList.add('faq-item-link-active');
            }
        })
    })
  });
}