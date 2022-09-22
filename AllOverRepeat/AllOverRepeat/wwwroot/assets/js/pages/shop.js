const shopList=document.querySelector(".shop__container__row__column-products__list")
const shopTable=document.querySelector(".shop__container__row__column-products__choice")
const shopListBtn=document.querySelector("._shop-list-btn")
const shopTableBtn=document.querySelector("._shop-table-btn")

shopListBtn.onclick=function(){
    shopTableBtn.classList.remove("_shop-active-btn");
    shopListBtn.classList.add("_shop-active-btn");
    shopTable.classList.add("_scale-zero");
    shopList.classList.add("_transform-return");
    
};

shopTableBtn.onclick=function(){
    shopListBtn.classList.remove("_shop-active-btn");
    shopTableBtn.classList.add("_shop-active-btn");
    shopList.classList.remove("_transform-return");
    shopTable.classList.remove("_scale-zero");
};


const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
	a.addEventListener('click', b => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
        a.classList.toggle("selectBtnRotate");
	})
})
option.forEach(a => {
	a.addEventListener('click', b => {
		b.target.parentElement.classList.remove('toggle');
		
		const parent = b.target.closest('.select').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	})
})

function getVals(){
    let parent = this.parentNode;
    let slides = parent.getElementsByClassName("_price-filter");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }

    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByClassName("_price-filter");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              sliders[y].oninput();
            }
          }
        }
  