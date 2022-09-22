window.onload=function(){
  $(document).ready(function(){
    $(".main-products__container__row__carousel").owlCarousel();
  });
  $(document).ready(function(){
    $(".main-top-seller__container__row__top-sellers__carousel").owlCarousel();
  });
  $(document).ready(function(){
    $(".main-blogs__container__row__carousel").owlCarousel();
  });
  $(document).ready(function(){
    $(".main-blogs__container__logo-row__carousel").owlCarousel();
  });
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  const menuBtn=document.querySelector("._menu-btn");
  const closeMenuBtn=document.querySelector(".mobile-menu__container__close__btn");
  const transparentDiv=document.getElementById("mobile");
  const mobileMenu=document.querySelector(".mobile-menu");
  const accardions=document.querySelectorAll(".mobile-menu__container__navbar__list__item__sub-list");
  const accardionBtns=document.querySelectorAll(".mobile-menu__container__navbar__list__item__link-btn__btn");
  const subAccardions=document.querySelectorAll(".additional-sub-list");
  const subAccardionBtns=document.querySelectorAll(".additional-menu__btn");
  const currencyBtns=document.querySelectorAll(".mobile-menu__container__currency-accaunt__list__currency__link");
  const currencyAccardions=document.querySelectorAll(".mobile-menu__container__currency-accaunt__list__currency__list");
  const searchBtn=document.querySelector(".extras-search");
  const closeSearchBtn=document.querySelector(".transparent__body__search__close__btn");
  const transparentSearchDiv=document.querySelector(".transparent__body__search");
  const closeQuickBtn=document.querySelector(".transparent__body__quick-view__container__close");
  const transparentQuickDiv=document.querySelector(".transparent__body__quick-view");
  const quickContainer=document.querySelector(".transparent__body__quick-view__container");
  const quickBtns=document.querySelectorAll("._quick-btn");
  const transparentSearchInput=document.querySelector(".transparent__body__search__input-btn");
  const carouselBtns=document.querySelectorAll("._cus-carousel__icon");
  const carouselContainer=document.querySelector(".main-carousel__container");
  const header = document.querySelector(".custom-header__bottom");
  var sticky = 270;
  const scrollBtn=document.querySelector("._scroll-button");
  var resultQuick=true;
  
quickContainer.onmouseenter=function(){
  resultQuick=false;
  
}
quickContainer.onmouseleave=function(){
  resultQuick=true;
  
}

transparentQuickDiv.onclick=function(){
  if(resultQuick){
    transparentQuickDiv.classList.remove("_opacity-return");
    quickContainer.classList.remove("_transform-translate-y");
  }
};


  for (let i = 0; i < quickBtns.length; i++) {
    quickBtns[i].onclick=function(e){
      transparentQuickDiv.classList.add("_opacity-return");
      quickContainer.classList.add("_transform-translate-y");
      quickBtns[i].blur()
    }
  }
  
  if(document.body.contains(document.querySelector(".transparent__body__quick-view__container__close"))){
  closeQuickBtn.onclick=function(){
    transparentQuickDiv.classList.remove("_opacity-return");
    quickContainer.classList.remove("_transform-translate-y");
  }
}
function scrollAppear() {
  if (window.pageYOffset > 550) {
    scrollBtn.classList.add("_scroll-return");
  }
   else {
    scrollBtn.classList.remove("_scroll-return");
  }
};

scrollBtn.onclick=function() {
  window.scrollTo(0,0);
}

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("_sticky");
  }
   else {
    header.classList.remove("_sticky");
  }
};

 window.onscroll = function() {stickyHeader(),scrollAppear()};

if(document.body.contains(document.querySelector(".main-carousel__container"))){
  carouselContainer.onmouseenter = function(){
    carouselBtns.forEach((btn)=>{
      btn.classList.add("_opacity-return")
    })
  };
  carouselContainer.onmouseleave = function(){
    carouselBtns.forEach((btn)=>{
      btn.classList.remove("_opacity-return")
    })
  };
}
  searchBtn.onclick=function(){
    transparentSearchDiv.classList.add("_opacity-return");
    transparentSearchInput.classList.add("_transform-xy-search");
  }
  closeSearchBtn.onclick=function(){
    transparentSearchDiv.classList.remove("_opacity-return");
    transparentSearchInput.classList.remove("_transform-xy-search");

  }

  menuBtn.onclick=function(){
    transparentDiv.classList.add("_opacity-return");
    mobileMenu.classList.add("_transform-translate-x");

  }
  closeMenuBtn.onclick=function(){
    transparentDiv.classList.remove("_opacity-return");
    mobileMenu.classList.remove("_transform-translate-x");

  }
  transparentDiv.onclick=function(){
    transparentDiv.classList.remove("_opacity-return");
    mobileMenu.classList.remove("_transform-translate-x");

  }

  for (let i = 0; i < accardionBtns.length; i++) {
    accardionBtns[i].onclick=function(){
      for (let i = 0; i < currencyBtns.length; i++) {
        currencyAccardions[i].classList.remove("_custom-accordion")
      }
      if(accardionBtns[i].classList.contains("_x-rotate-vr")){
        accardionBtns[i].classList.remove("_x-rotate-vr")
        accardions[i].classList.remove("_custom-accordion")
      }
      else{
        for (let i = 0; i < accardionBtns.length; i++) {
          accardionBtns[i].classList.remove("_x-rotate-vr")
          accardions[i].classList.remove("_custom-accordion")
          for (let i = 0; i < subAccardionBtns.length; i++) {
            subAccardionBtns[i].classList.remove("_x-rotate-vr")
           subAccardions[i].classList.remove("_custom-accordion")
          }
        }
        accardionBtns[i].classList.toggle("_x-rotate-vr")
        accardions[i].classList.toggle("_custom-accordion")
      }
    }
  }

  for (let i = 0; i < subAccardionBtns.length; i++) {
    subAccardionBtns[i].onclick=function(){
      for (let i = 0; i < currencyBtns.length; i++) {
        currencyAccardions[i].classList.remove("_custom-accordion")
      }
      if(subAccardionBtns[i].classList.contains("_x-rotate-vr")){
        subAccardionBtns[i].classList.remove("_x-rotate-vr")
        subAccardions[i].classList.remove("_custom-accordion")
      }
      else{
        for (let i = 0; i < subAccardionBtns.length; i++) {
          subAccardionBtns[i].classList.remove("_x-rotate-vr")
         subAccardions[i].classList.remove("_custom-accordion")
        }
        subAccardionBtns[i].classList.toggle("_x-rotate-vr")
        subAccardions[i].classList.toggle("_custom-accordion")
      }
    }
    for (let i = 0; i < currencyBtns.length; i++) {
      currencyBtns[i].onclick=function(){
        if(currencyAccardions[i].classList.contains("_custom-accordion")){
          currencyAccardions[i].classList.remove("_custom-accordion")
        }
        else{
          for (let i = 0; i < currencyBtns.length; i++) {
            currencyAccardions[i].classList.remove("_custom-accordion")
          }
          currencyAccardions[i].classList.toggle("_custom-accordion")
        }
      }
    }
  }
  
}
$('.main-products__container__row__carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      
      576:{
          items:2
      },
      992:{
          items:3
      },
      1200:{
        items:4
    }
  }
})
$('.main-top-seller__container__row__top-sellers__carousel').owlCarousel({
  loop:true,
  margin:1,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      
      576:{
          items:1
      },
      992:{
          items:1
      },
      1200:{
        items:2
    }
  }
})
$('.main-blogs__container__row__carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1200:{
          items:3
      }
  }
})
$('.main-blogs__container__logo-row__carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      480:{
        items:2
    },
      992:{
          items:4
      }
  }
})

if(document.body.contains(document.querySelector(".slider-for"))){
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
}
$(".image-zoom")
  .on("mouseover", function() {
    $(this)
      .children(".image-zoom__img")
      .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  })
  .on("mouseout", function() {
    $(this)
      .children(".image-zoom__img")
      .css({ transform: "scale(1)" });
  })
  .on("mousemove", function(e) {
    $(this)
      .children(".image-zoom__img")
      .css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%"
      });
  });

  
  
  
  
  const pricePro=document.querySelectorAll("._price-pro > span");
  const namePro=document.querySelectorAll("._name-pro");
  const imgPro=document.querySelectorAll("._img-pro");
  const btnPro=document.querySelectorAll("._btn-pro");
  
  for(let i=0; i<btnPro.length ;i++){
      btnPro[i].onclick=function(){
          price=parseFloat(pricePro[i].innerText)
          name=namePro[i].innerText.toString();
          let items = localStorage.getItem("items")
            ? JSON.parse(localStorage.getItem("items"))
            : [];
        
          if (items.length > 0) {
            if (items.some((item) => item.item.id === btnPro[i].id)) {
              items = items.filter((item) => item.id !== btnPro[i].id);
              
            } else {
              items.push({
                item: {
                  id:btnPro[i].id,
                  img: `${imgPro[i].src}`,
                  title:`${name}`,
                  price:`${price}`
                },
                count: 1,
              });
            }
          } else {
            items.push({
              item: {
                id:btnPro[i].id,
                img: `${imgPro[i].src}`,
                title:`${name}`,
                price:`${price}`
              },
              count: 1,
            });
          }
          localStorage.setItem("items", JSON.stringify(items));
          renderContentSidebar();
        }
        
  }