let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");

boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})
