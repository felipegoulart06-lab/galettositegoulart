document.querySelectorAll(".faq-item").forEach(item=>{
  item.addEventListener("click",()=>item.classList.toggle("open"));
});

const toast=document.getElementById("toast");
function showToast(e){
  if(e) e.preventDefault();
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>toast.classList.remove("show"),3200);
}

const revealItems=document.querySelectorAll(".op-card,.step,.proof-box,.section-heading");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
revealItems.forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(18px)";
  el.style.transition="opacity .6s ease, transform .6s ease";
  observer.observe(el);
});
