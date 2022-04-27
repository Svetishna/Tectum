const btnReg = document.querySelectorAll('.button-reg');
const btnRegHead = document.querySelector('.button-reg-head');
const btnTheme = document.querySelector('.button-theme');
const btnClose = document.querySelector('.close');
const btnForex = document.querySelector('.button-text');
const btnLang = document.querySelector('.button-lang');
const btnText = document.querySelector('.button-text-change');
const blur = document.querySelector('.wrapper');
const lightTheme = document.querySelector('.sun');
const darkTheme = document.querySelector('.moon');
const forexList = document.querySelector('.header-button__list');
const langList = document.querySelector('.lang-list');
const sortForex = document.querySelector('.section__header-table');
const sortForexBtn = document.querySelector('.section__header__btn');
const changeImgLight = document.querySelectorAll('.img-file');
const changeImgDark = document.querySelectorAll('.img-file-dark');
const searchArea = document.querySelector('.search__textarea');
const hash = document.querySelectorAll('.hash');
const toggleImg = document.querySelectorAll('.search-img');
const close = document.querySelector('.close-img');
const btnShow = document.querySelector('.section__footer__info__btn');
const showList = document.querySelector('.section__footer__info__list');
const yellowArrow = document.querySelectorAll('.yellow-svg');
const arrowForYellow = document.querySelectorAll('.pagination-active');
const pageCount = document.querySelector('.btn-text');
const footer = document.querySelectorAll('.footer__icons');
const placeEmail = document.querySelector('.reg-form__textarea');
const btnEmail = document.querySelector('.button-form-reg');
const wrongEmail = document.querySelector('.wrong-textarea');
const btnEnter = document.querySelector('.button-enter');
const headEmail = document.querySelector('.header-email');
const btnMen = document.querySelector('.button-men');
const btnForexBurger = document.querySelector('.button-text-burger');
const forexListBurger = document.querySelector('.list-burger');
const btnLangBurger = document.querySelector('.button-lang-burger ');
const btnTextBurger = document.querySelector('.text-change-burger');
const langListBurger = document.querySelector('.lang-list-burger');
const btnOpenBurger = document.querySelector('.button-burger');
const menuBurger = document.querySelector('.wrapper-burger');
const btnCloseBurger = document.querySelector('.burger-menu__close');

const arrayImg = Array.from(changeImgLight);
const arrayHash = Array.from(hash);
const arrayArrows = Array.from(arrowForYellow);
const sortList = Array.from(document.querySelector('.article__list').children);

const arrowMinusTen = arrayArrows[0];
const arrowMinus = arrayArrows[1];
const arrowPlus = arrayArrows[2];
const arrowPlusTen = arrayArrows[3];

//Функция по смене цвета стрелки при наведении
const changeColor = (element) => {
    element.addEventListener('mouseover', () => {
        const arrayToChange = Array.from(element.getElementsByTagName('path'));

        arrayToChange.forEach((path) => {
            if (path.classList.contains('yellow-svg')) {
                path.style.fill = '#FDDA25';
            }
        })
    })

    element.addEventListener('mouseleave', () => {
        const arrayToChange = Array.from(element.getElementsByTagName('path'));

        arrayToChange.forEach((path) => {
            if (path.classList.contains('yellow-svg')) {
                path.style.fill = '#F2F4F7';
            }
        })
    })
}

//Функция по активации/деактивации стрелки
const changeColorToGray = (arrow, i) => {
    const greyArrow = arrow.querySelector('.grey-svg');
    if (parseInt(pageCount.textContent) > i) {
        greyArrow.style.fill = '#222837';
    } else {
        greyArrow.style.fill = '#A4AAC2';
    }
}

//Фунцкии по выбору языка и валюты
const listLang = (btn, list) => {
    list.classList.toggle('hidden');
    btn.classList.toggle('arrow-top');
    btn.classList.toggle('arrow-bottom');
}
const chooseLang = (btn, list, text, target) => {
    if (target.classList.contains('list__item')) {
        text.textContent = target.textContent;
        list.classList.add('hidden');
        btn.classList.toggle('arrow-top');
        btn.classList.toggle('arrow-bottom');
    }
}

//Модальное окно
btnReg.forEach((btn) => {
    btn.addEventListener('click', () => {
        blur.classList.remove('hidden');
        menuBurger.classList.add('hidden');
    })
})
btnClose.addEventListener('click', () => {
    blur.classList.add('hidden');
})
btnEmail.addEventListener('click', (e) => {
    e.preventDefault();
    let result = placeEmail.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
    if (result) {
        blur.classList.add('hidden');
        btnEnter.classList.add('hidden');
        btnRegHead.classList.add('hidden');
        headEmail.classList.remove('hidden');
        headEmail.textContent = placeEmail.value;
        btnMen.classList.remove('hidden');
    } else {
        wrongEmail.classList.remove('hidden');
    }
})

//Смена значка темы
btnTheme.addEventListener('click', () => {
    lightTheme.classList.toggle('hidden');
    darkTheme.classList.toggle('hidden');
})

//Выбор языка
btnLang.addEventListener('click', () => {
    listLang(btnLang, langList);
})
langList.addEventListener('click', (e) => {
    const target = e.target;
    chooseLang(btnLang, langList, btnText, target);
})

//Выбор валюты
btnForex.addEventListener('click', () => {
    listLang(btnForex, forexList);
})
forexList.addEventListener('click', (e) => {
    const target = e.target;
    chooseLang(btnForex, forexList, btnForex, target);
})

//Реализация сортировки (только кнопка)
sortList.forEach((item) => {
    item.addEventListener('click', () => {
        const img = item.querySelector('.oval');

        //Чтобы сортировка реализовывалась только по одному Item
        sortList.forEach((btn) => {
            const img = btn.querySelector('.oval');
            img.src = 'img/oval.svg';
        });

        if (img.src === 'http://127.0.0.1:5502/img/oval.svg') {
            img.src = 'img/ovalblack.svg';
        } else {
            img.src = 'img/oval.svg';
        }
    })
})

//Выбор валюты в таблице
sortForexBtn.addEventListener('click', () => {
    sortForex.classList.toggle('hidden');
    sortForexBtn.classList.toggle('buttom');
    sortForexBtn.classList.toggle('top');
})
sortForex.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('table-item')) {
        sortForexBtn.textContent = target.textContent;
        sortForex.classList.add('hidden');
        sortForexBtn.classList.toggle('buttom');
        sortForexBtn.classList.toggle('top');
    }
})

//Смена иконки в хэше событий и вставка строчки в поиск
arrayImg.forEach((img) => {
    img.addEventListener('click', () => {

        //Чтобы был выделен только один Item
        arrayImg.forEach((btn) => {
            btn.src = 'img/file.svg';
        })

        if (img.src === 'file:///C:/Users/Comp/Desktop/%D0%92%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B5/Tectum%20test-frontend/img/file.svg' || img.src === 'http://127.0.0.1:5502/img/file.svg') {
            img.src = 'img/file-dark.svg';
            let index = arrayImg.indexOf(img);
            let hashText = arrayHash[index].textContent;
            searchArea.textContent = hashText;
            toggleImg.forEach((togImg) => {
                togImg.classList.remove('hidden');
            })
        } else {
            img.src = 'img/file.svg';
            searchArea.textContent = '';
            toggleImg.forEach((togImg) => {
                togImg.classList.add('hidden');
            })
        }
    })
})

//Очистить строку поиска
close.addEventListener('click', () => {
    searchArea.textContent = '';
    toggleImg.forEach((togImg) => {
        togImg.classList.add('hidden');
    })
    arrayImg.forEach((img) => {
        if (img.src === 'http://127.0.0.1:5502/img/file-dark.svg' || img.src === 'file:///C:/Users/Comp/Desktop/%D0%92%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B5/Tectum%20test-frontend/img/file-dark.svg') {
            img.src = 'img/file.svg';
        }
    })
})

//Работа со стрелками
arrowForYellow.forEach((arrow) => {
    changeColor(arrow);
})

arrowPlus.addEventListener('click', () => {
    let i = parseInt(pageCount.textContent);
    pageCount.textContent = i + 1;
    changeColorToGray(arrowMinus, 1);
    changeColorToGray(arrowMinusTen, 10);
})
arrowPlusTen.addEventListener('click', () => {
    let i = parseInt(pageCount.textContent);
    pageCount.textContent = i + 10;
    changeColorToGray(arrowMinus, 1);
    changeColorToGray(arrowMinusTen, 10);
})
arrowMinus.addEventListener('click', () => {
    let i = parseInt(pageCount.textContent);
    if (i > 1) {
        pageCount.textContent = i - 1;
    }
    changeColorToGray(arrowMinus, 1);
    changeColorToGray(arrowMinusTen, 10);
})
arrowMinusTen.addEventListener('click', () => {
    let i = parseInt(pageCount.textContent);
    if (i > 10) {
        pageCount.textContent = i - 10;
    }
    changeColorToGray(arrowMinus, 1);
    changeColorToGray(arrowMinusTen, 10);
})

//Показывать по
btnShow.addEventListener('click', () => {
    showList.classList.toggle('hidden');
    btnShow.classList.toggle('top-mini');
    btnShow.classList.toggle('bottom-mini');
})
showList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('list__item')) {
        btnShow.textContent = target.textContent;
        showList.classList.add('hidden');
        btnShow.classList.toggle('arrow-top');
        btnShow.classList.toggle('arrow-bottom');
    }
})

//Работа с футером
footer.forEach((foot) => {
    const footerImagesArr = Array.from(foot.getElementsByTagName('svg'));
    footerImagesArr.forEach((img) => {
        changeColor(img);
    })
})

//Для бургера выпадающие меню
btnLangBurger.addEventListener('click', () => {
    listLang(btnLangBurger, langListBurger);
})
langListBurger.addEventListener('click', (e) => {
    const target = e.target;
    chooseLang(btnLangBurger, langListBurger, btnTextBurger, target);
})
btnForexBurger.addEventListener('click', () => {
    listLang(btnForexBurger, forexListBurger);
})
forexListBurger.addEventListener('click', (e) => {
    const target = e.target;
    chooseLang(btnForexBurger, forexListBurger, btnForexBurger, target);
})


//Открытие/закрытие бургера
btnOpenBurger.addEventListener('click', () => {
    menuBurger.classList.remove('hidden');
})
btnCloseBurger.addEventListener('click', () => {
    menuBurger.classList.add('hidden');
})