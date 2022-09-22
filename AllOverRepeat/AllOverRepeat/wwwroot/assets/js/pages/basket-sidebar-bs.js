
const cartSidebar=document.querySelector("._cart-sidebar");
const cartSidebarBtn=document.getElementById("_cart-right-sidebar");
const cartSidebarCloseBtn=document.querySelector("._cart-sidebar__container__close__btn");
const transparentDiv=document.getElementById("transparent");



cartSidebarBtn.onclick=function(){
    transparentDiv.classList.add("_opacity-return");
    cartSidebar.classList.add("_transform-translate-x");

}
cartSidebarCloseBtn.onclick=function(){
    transparentDiv.classList.remove("_opacity-return");
    cartSidebar.classList.remove("_transform-translate-x");

}
  transparentDiv.onclick=function(){
    cartSidebar.classList.remove("_transform-translate-x");
    transparentDiv.classList.remove("_opacity-return");

}

// basket////////////////////////////////////////////////////


const subtotalSideDiv=document.querySelector("._cart-sidebar__container__total-box__prices__sub-total");
const ecoSideDiv=document.querySelector("._cart-sidebar__container__total-box__prices__eco-tax");
const totalSideDiv=document.querySelector("._cart-sidebar__container__total-box__prices__total");
const vatSideDiv=document.querySelector("._cart-sidebar__container__total-box__prices__vat");
const notification=document.querySelectorAll(".extras-notifications");

const deleteItem = (id) => {
 let items= localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

  items = items
    .filter(item => item.item.id !== id)
    
  localStorage.setItem("items", JSON.stringify(items));

  renderContentSidebar();
  renderContent();
};
const itemParserSidebar = () =>
  localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

const sidebar=document.querySelector("._cart-sidebar__container__products");
const renderContentSidebar = () => {
  const items = itemParserSidebar();
  if (items.length > 0) {
    sidebar.innerHTML = "";
    let ecoside=items.length *5;
      let subtotalrowside=0;
     let shipside=0;
    let totalside = 0;
    let subtotalside=0;
    let quantity=0;
   
    items.forEach((item) => {
      
      quantity+=item.count;
      for (let i=0;i<notification.length;i++){
        notification[i].innerHTML=quantity;
        notification[i].style.display="inline";
      }
      subtotalrowside=item.count*item.item.price;
      subtotalside+=subtotalrowside;
      shipside=subtotalside/100*20;
      totalside=subtotalside+ecoside+shipside;
      subtotalSideDiv.innerHTML="$"+subtotalside;
      ecoSideDiv.innerHTML="$"+ecoside;
      totalSideDiv.innerHTML="$"+totalside;
      vatSideDiv.innerHTML="$"+shipside;



sidebar.insertAdjacentHTML('afterbegin',` <div class="_cart-sidebar__container__products__selected">
<a href="single-product.html" class="_cart-sidebar__container__products__selected__image">
    <img src="${item.item.img}" alt="product" class="_cart-sidebar__container__products__selected__image__img">
</a>
<div class="_cart-sidebar__container__products__selected__info">
    <a  href="single-product.html" class="_cart-sidebar__container__products__selected__info__title">
        ${item.item.title}
    </a>
    <div class="_cart-sidebar__container__products__selected__info__price">
        <span class="_cart-sidebar__container__products__selected__info__price__count">${item.count}</span>
        <span class="_cart-sidebar__container__products__selected__info__price__static">
            <i class="fa-solid fa-xmark"></i>
        </span>
        <span class="_cart-sidebar__container__products__selected__info__price__value">$${item.item.price}</span>
    </div>
</div>
<button class="_cart-sidebar__container__products__selected__delete" onclick="deleteItem('${item.item.id}')">
    <i class="fa-solid fa-xmark"></i>
</button>
</div>`)

    //   totalPrice += price * count;

    //   renderCounter(divItem, id, count);
    });

    // totalPriceContainer.innerHTML = `${totalPrice} AZN`;
  } else {
    subtotalSideDiv.innerHTML="$0";
    ecoSideDiv.innerHTML="$0";
    totalSideDiv.innerHTML="$0";
    vatSideDiv.innerHTML="$0";
    for (let i=0;i<notification.length;i++){
      notification[i].style.display="none";
    }
    sidebar.innerHTML = "Your basket is empty";
    // totalPriceContainer.innerHTML = ``;
  }
};

renderContentSidebar();

window.addEventListener("storage", renderContentSidebar);
