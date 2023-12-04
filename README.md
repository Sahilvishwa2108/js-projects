# Project related to DOM

## Project link
[click here](https://....)

# Solution code

## Project 1

```javascript
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

```
## Project 2

```javascript
const form = document.querySelector("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Height = parseInt(document.querySelector("#Height").value);
    const Weight = parseInt(document.querySelector("#Weight").value);
    const result = document.querySelector("#result");
    
    // console.log(BMI);
    if(Height == '' || Height <= 0 || isNaN(Height)){
        result.innerHTML = `please enter valid height`;
    }else if(Weight == '' || Weight <= 0 || isNaN(Weight)){
        result.innerHTML = `please enter valid weight`;
    }else{
        const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }
})

```