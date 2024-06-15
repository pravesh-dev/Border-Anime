let box = document.querySelector("#container");
let mover = document.querySelector("#mover");
let boxModel =  box.getBoundingClientRect();
box.addEventListener('mousemove', (e)=>{
gsap.to(mover, {
    left: e.clientX - boxModel.left,
    top: e.clientY - boxModel.top,
})
})