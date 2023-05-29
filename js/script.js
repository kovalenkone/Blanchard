// dropdown header
const dropdownButton = document.querySelectorAll('.header-bottom__btn');
const dropdownSubmenu = document.querySelectorAll('.header-bottom__dropdown-list');
const dropdownArrow = document.querySelectorAll('.header-bottom__trigger');

dropdownButton.forEach((el, index) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();

    const dropdownSubmenuClassList = dropdownSubmenu[index].classList;
    if (dropdownSubmenuClassList.contains('dropdown--open')) {
      dropdownSubmenuClassList.remove('dropdown--open')
      dropdownButton[index].classList.remove('header-bottom__btn--active')
      dropdownArrow[index].classList.remove('header-bottom__trigger--active')

    } else {
      dropdownSubmenu.forEach((el) => el.classList.remove('dropdown--open'))
      dropdownSubmenuClassList.add('dropdown--open')
      dropdownArrow.forEach((el) => el.classList.remove('header-bottom__trigger--active'))
      dropdownArrow[index].classList.add('header-bottom__trigger--active')
      dropdownButton.forEach((el) => el.classList.remove('header-bottom__btn--active'))
      dropdownButton[index].classList.add('header-bottom__btn--active')
    }
  });
});

//choices header
const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom'
});

// swiper gallery
var swiper = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,

  breakpoints: {
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    850: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },

    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  a11y: {
    prevSlideMessage: 'Кнопка Предыдущий слайд',
    nextSlideMessage: 'Кнопка Следующий слайд',
  },
});

// accordion
$(".catalog__accordion").accordion({
 heightStyle: "content", 
 active: 0,
 collapsible: true,
});

const accordionButton = document.querySelectorAll('.catalog-accordion__header-btn');

accordionButton.forEach((el, index) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();

    const accordionButtonClassList = accordionButton[index].classList;
    if (accordionButtonClassList.contains('accordion-open')) {
      accordionButtonClassList.remove('accordion-open')

    } else {
      accordionButton.forEach((el) => el.classList.remove('accordion-open'))
      accordionButtonClassList.add('accordion-open')
    }
  });
});
  
// tabs catalog
document.querySelectorAll('.catalog-accordion__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.catalog-accordion__link').forEach(function(btn){
  btn.classList.remove('catalog-accordion__link--active')});
  e.currentTarget.classList.add('catalog-accordion__link--active');
  document.querySelectorAll('.catalog__painter').forEach(function(tabsBtn){
      tabsBtn.classList.remove('catalog__painter--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter--active');
  });
});

// swiper events
var swiper = new Swiper('.events__swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    620: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    850: {
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1400: {
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
});

// swiper projects 
var swiper = new Swiper('.projects__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    650: {
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },

    720: {
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },

    850: {
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1350: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
});

// tooltip
tippy('#tooltip-1', {
  content: "Пример современных тенденций - современная методология разработки",
  trigger: 'click',
  theme: 'tooltip-theme',
});

tippy('#tooltip-2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  trigger: 'click',
  theme: 'tooltip-theme',
});

tippy('#tooltip-3', {
  content: "В стремлении повысить качество ",
  trigger: 'click',
  theme: 'tooltip-theme',
});

// inputmask
var inputTel = document.querySelector("input[type='tel']");
var im = new Inputmask ('+7 (999) 999-99-99', { showMaskOnHover: false });

im.mask(inputTel);

// validate
new window.JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxlength: 30,
    },
    tel: {
      required: true,
      tel: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      minLength: "Имя слишком короткое",
      maxlength: "Имя слишком длинное",
      required: 'Введите имя'
    },
    tel: {
      required: "Введите номер",
      function: 'Введите номер полностью'
    },
  },
});

// map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.75868386734955, 37.601035915341456],
    zoom: 16
});

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark); 

}

// burger
const menu = document.querySelector('.header__nav');

document.querySelector('.header__burger').addEventListener('click', function () {
  menu.classList.add('header__nav--open'),
  document.body.classList.add("disable-scroll")
});

document.querySelector('.header__btn-menu-close').addEventListener('click', function() {
  menu.classList.remove('header__nav--open'),
  document.body.classList.remove("disable-scroll")
});

// search
const formMobile = document.querySelector('.header__form-mobile')

document.querySelector('.header__btn-form-open').addEventListener('click', function() {
  formMobile.classList.add('header__form-mobile--open')
});

document.querySelector('.header__btn-form-close').addEventListener('click', function() {
  formMobile.classList.remove('header__form-mobile--open')
});

// modal
const modal = new GraphModal();

