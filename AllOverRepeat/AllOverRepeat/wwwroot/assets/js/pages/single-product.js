
    const infoBtns=document.querySelectorAll(".single-product__container__info-row__column__buttons__button");
    const infoContainer=document.querySelectorAll(".single-product__container__info-row__column__container__desk > div");
   
    for (let i = 0; i < infoBtns.length; i++) {
        infoBtns[i].onclick=function(){
         
            for (let i = 0; i < infoBtns.length; i++) {
                infoContainer[i].classList.remove("_active-info-item")
                infoBtns[i].classList.remove("_active-info-btn")
            }
            infoContainer[i].classList.add("_active-info-item")
            infoBtns[i].classList.add("_active-info-btn")
          
        }
      }
