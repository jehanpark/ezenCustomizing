window.addEventListener("scroll", ()=>{
 let scroll = window.scrollY
 const header = document.querySelector(".lnb")
})

if (scroll > 50) {
 header.classList.add("active")
}else{
 header.classList.remove("active")
}