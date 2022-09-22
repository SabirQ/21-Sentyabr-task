// basket real
const container = document.querySelector(".cart__container__row__column__cus-table__table__body");
const total = document.querySelector("._pro-total");
const subtotal = document.querySelector("._pro-sub-total");


const itemParser = () =>
  localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

const decreaseItemCount = (id) => {
  let items = itemParser();

  items = items
    .map((item) => {
      if (item.item.id === id) {
        if (item.count > 1) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
      } else {
        return item;
      }
    })
    .filter(Boolean);

  localStorage.setItem("items", JSON.stringify(items));

  renderContent();
  renderContentSidebar();
};
const deleteItemCount = (id) => {
  let items = itemParser();

  items = items
    .filter(item => item.item.id !== id)
    

  localStorage.setItem("items", JSON.stringify(items));

  renderContent();
  renderContentSidebar();
};

const increaseItemCount = (id) => {
  let items = itemParser();

  items = items.map((item) => {
    if (item.item.id === id) {
      if (item.count < 10) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
    }

    return item;
  });

  localStorage.setItem("items", JSON.stringify(items));

  renderContent();
  renderContentSidebar();
};




// const renderCounter = (id, count) => {
//             const parentdiv=document.querySelectorAll(`.${parent}`)
//             parentdiv.insertAdjacentHTML('afterend', `<div class="plus-minus">
//             <button class="plus-minus__minus">-</button>
//             <input class="plus-minus__value" type="text" value="1">
//             <button class="plus-minus__plus">+</button>
//         </div>`)
       
       
      
//         for ( let i = 0;i<minus.length;i++){
//           minus[i].addEventListener("click", () => {
//               decreaseItemCount(id);
//             });
//             plus[i].addEventListener("click", () => {
//               increaseItemCount(id);
//             });
//         }
//         value.innerHTML = count;
//       };
const subtotalDiv=document.querySelector("._pro-sub-total");
const shippingDiv=document.querySelector("._pro-shipping");
const totalDiv=document.querySelector("._pro-total");
const renderContent = () => {
  const items = itemParser();
  if (items.length > 0) {
    let eco=items.length *5;
      let subtotalrow=0;
     let subtotal=0;
     let ship=0;
    let total = 0;
    // let eco=0;
    container.innerHTML = "";
    // sidebar.innerHTML = "";
    items.forEach(item => {
        
        subtotalrow=item.count*item.item.price;
        subtotal+=subtotalrow;
        ship=(subtotal/100*20)+eco;
        shippingDiv.innerHTML="$"+ship;
        subtotalDiv.innerHTML="$"+subtotal;
        total=subtotal+ship;
        totalDiv.innerHTML="$"+total;

 container.insertAdjacentHTML('afterbegin',` <tr class="cart__container__row__column__cus-table__table__body__row">
 <td class="cart__container__row__column__cus-table__table__body__row__link">
     <a href="single-product.html" class="cart__container__row__column__cus-table__table__body__row__link__image">
         <img class="cart__container__row__column__cus-table__table__body__row__link__image__img" src="${item.item.img}" alt="product"/>
     </a>
 </td>
 <td class="cart__container__row__column__cus-table__table__body__row__title">
     <a href="single-product.html" class="cart__container__row__column__cus-table__table__body__row__title__link">
         <span class="cart__container__row__column__cus-table__table__body__row__title__link__name">${item.item.title}</span>
     </a>
 </td>
 <td class="cart__container__row__column__cus-table__table__body__row__price">
     <span class="cart__container__row__column__cus-table__table__body__row__price__value">
         $${item.item.price}
     </span>
 </td>
 <td class="cart__container__row__column__cus-table__table__body__row__count">
     <div class="plus-minus">
         <button class="plus-minus__minus" onclick="decreaseItemCount('${item.item.id}')">-</button>
         <input class="plus-minus__value" type="text" value="${item.count}">
         <button class="plus-minus__plus" onclick="increaseItemCount('${item.item.id}')">+</button>
     </div>
 </td>
 <td class="cart__container__row__column__cus-table__table__body__row__sub-total">
     <span class="cart__container__row__column__cus-table__table__body__row__sub-total__value">
         $${subtotalrow}
     </span>
 </td>
 <td class="cart__container__row__column__cus-table__table__body__row__delete">
     <button class="cart__container__row__column__cus-table__table__body__row__delete__btn" onclick="deleteItemCount('${item.item.id}')">
         <i class="fa-regular fa-trash-can"></i>
     </button>
 </td>
</tr>`);

    //   totalPrice += price * count;

    //   renderCounter(divItem, id, count);
    });

    // totalPriceContainer.innerHTML = `${totalPrice} AZN`;
  } else {
    shippingDiv.innerHTML="$0";
    subtotalDiv.innerHTML="$0";
    totalDiv.innerHTML="$0";
    container.innerHTML = "";
    
    // totalPriceContainer.innerHTML = ``;
  }
};

renderContent();

window.addEventListener("storage", renderContent);

  

// const renderContent = () => {
//   const items = itemParser();

//   if (items.length > 0) {
//     let subPrice = 0;
//     let totalPrice = 0;
//     container.insertAdjacentHTML('afterend', ``);

//     items.forEach(({ count, item: { img, title, id, price } }) => {

//       totalPrice += price * count;
//       subPrice += price * count;
//       container.insertAdjacentHTML('afterend', `<tr class="cart__container__row__column__cus-table__table__body__row" id="${id}">
//       <td class="cart__container__row__column__cus-table__table__body__row__link">
//           <a href="single-product.html" class="cart__container__row__column__cus-table__table__body__row__link__image">
//               <img class="cart__container__row__column__cus-table__table__body__row__link__image__img" src="${img}" alt="product"/>
//           </a>
//       </td>
//       <td class="cart__container__row__column__cus-table__table__body__row__title">
//           <a href="single-product.html" class="cart__container__row__column__cus-table__table__body__row__title__link">
//               <span class="cart__container__row__column__cus-table__table__body__row__title__link__name">${title}</span>
//           </a>
//       </td>
//       <td class="cart__container__row__column__cus-table__table__body__row__price">
//           <span class="cart__container__row__column__cus-table__table__body__row__price__value">
//               $${price}
//           </span>
//       </td>
//       <td class="cart__container__row__column__cus-table__table__body__row__count">
      
//       </td>
//       <td class="cart__container__row__column__cus-table__table__body__row__sub-total">
//           <span class="cart__container__row__column__cus-table__table__body__row__sub-total__value">
//               $${subPrice}
//           </span>
//       </td>
//       <td class="cart__container__row__column__cus-table__table__body__row__delete">
//           <button class="cart__container__row__column__cus-table__table__body__row__delete__btn">
//               <i class="fa-regular fa-trash-can"></i>
//           </button>
//       </td>
//   </tr>`);

//       renderCounter(cart__container__row__column__cus-table__table__body__row__count, id, count);
//     });

//     totalPriceContainer.innerHTML = `${totalPrice} AZN`;
//   } else {
//     container.innerHTML = "Your basket is empty";
//     totalPriceContainer.innerHTML = ``;
//   }
// };

// renderContent();

// window.addEventListener("storage", renderContent);
