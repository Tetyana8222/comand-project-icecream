!function(){let e=0;!function l(){let t,o=document.getElementsByClassName("mySlides");for(t=0;t<o.length;t++)o[t].style.display="none";e++,e>o.length&&(e=1);o[e-1].style.display="block",setTimeout(l,3e3)}(),window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="team-slider"]');e&&e.forEach((e=>{let l=e.querySelector(".swiper-pagination");swiper=new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:l,clickable:!0,renderBullet:function(e,l){return'<li class="'+l+'"></li>'}},on:{transitionStart:function(){let l=this.previousIndex,t=e.getElementsByClassName("swiper-slide")[l];t&&setTimeout((function(){t.classList.remove("is-play")}),1e3)},transitionEnd:function(){let l=this.activeIndex;e.getElementsByClassName("swiper-slide")[l].classList.add("is-play")}}})}))}),!1),(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelectorAll("[data-modal-close]"),modal:document.querySelectorAll("[data-modal]"),body:document.body};let l=0;for(let s of e.openModalBtn){function t(l){for(let l=0;l<e.modal.length;l++)e.modal[l].classList.add("is-hidden");e.modal[l].classList.remove("is-hidden"),e.body.classList.add("overflow")}s.onclick=()=>{l=+s.dataset.modalOpen,t(l)}}for(let n of e.closeModalBtn){function o(l){e.modal[l].classList.add("is-hidden"),e.body.classList.remove("overflow")}n.onclick=()=>{l=+n.dataset.modalClose,o(l)}}})()}();
//# sourceMappingURL=index.19d7508c.js.map