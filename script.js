let box = document.querySelector("#container");
let mover = document.querySelector("#mover");
let boxModel =  box.getBoundingClientRect();
box.addEventListener('mousemove', (e)=>{
gsap.to(mover, {
    scale: 1,
    left: e.clientX - boxModel.left,
    top: e.clientY - boxModel.top,
})
})
box.addEventListener('mouseleave', (e)=>{
gsap.to(mover, {
    scale: 0,
    left: e.clientX - boxModel.left,
    top: e.clientY - boxModel.top,
})
})