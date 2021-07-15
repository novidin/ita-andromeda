
const portfolioPage = document.querySelector('#portfolio');
if (portfolioPage) {

  let itemsOnPage = 8;

  let cards = document.querySelectorAll('.portfolio-card');
  let pageBtnsBox = document.querySelector('.page-nums');
  let nextPrevBox = document.querySelector('.next-prev-btns');
  let filterBtnsBox = document.querySelector('.filter-btns');
  let cardsArr = Array.from(cards);
  let filteredArr = [];
  filterBtns = document.querySelectorAll('.filter-btn');
  let numBtns = document.querySelectorAll('.page-num-btn');
  let startBtn = document.querySelector('.filter-btn.active')

  function initPagination(cards) {
    let countOfPage = Math.ceil(cards.length / itemsOnPage);
    pageBtnsBox.innerHTML = '';
    for (let i = 1; i <= countOfPage; i++) {
      let btn = document.createElement('button');
      btn.innerHTML = i;
      btn.classList.add('page-num-btn');
      let li = document.createElement('li');
      li.appendChild(btn);
      pageBtnsBox.appendChild(li);
      let pageItems = [];
      pageItems[i] = cards.slice((i * itemsOnPage), (i * itemsOnPage) + itemsOnPage);
      pageItems[i].forEach((pageItem) => {
        pageItem.dataset.page = i + 1;
        pageItem.classList.add('hidden');
      });
    };
    numBtns = document.querySelectorAll('.page-num-btn');
    switchBtn(numBtns[0], numBtns, 'active');
    addEventListener
  }

  filterBtnsBox.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('filter-btn')) {
      activeBtn = target;
      let filterValue = activeBtn.dataset.tag;
      switchBtn(activeBtn, filterBtns, 'active');
      let filteredCards = [];
      cardsArr.forEach((card) => {
        card.classList.remove('hidden');
        if (filterValue != card.dataset.tag && filterValue != 'all') {
          card.classList.add('hidden');
        } else {
          filteredCards.push(card);
        }
      });
      filteredArr = filteredCards;
      initPagination(filteredCards);
    };
  })

  function switchBtn(btn, btns, classBtn) {
    btns.forEach((b) => {
      b.classList.remove(classBtn)
    });
    btn.classList.add(classBtn)
  }

  pageBtnsBox.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('page-num-btn')) {
      activeBtn = target;
      let pageValue = activeBtn.innerHTML;
      switchBtn(activeBtn, numBtns, 'active');
      filteredArr.forEach((card) => {
        //  if (card.dataset.tag == activeTagValue) {
        card.classList.remove('hidden');
        if (pageValue != card.dataset.page) {
          card.classList.add('hidden');
          // }
          // console.log(cardsArr);
        }
      })
    };
  });

  nextPrevBox.addEventListener('click', (e) => {
    const target = e.target;
    let activePage = document.querySelector('.page-num-btn.active');
    if (target.classList.contains('next-btn')) {
      nxtEl = activePage.parentElement.nextSibling;
      if (nxtEl) {
        nxtEl.children[0].click();
      };
    };
    if (target.classList.contains('prev-btn')) {
      prevEl = activePage.parentElement.previousSibling;
      if (prevEl) {
        prevEl.children[0].click();
      };
    }
  });

  startBtn.click();

};


