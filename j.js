// const imgscl = document.querySelector('.imgscl');

// setInterval(() => {
//     imgscl.classList.toggle('imgsclhover');

// }, 1000);


const imgscl = document.querySelectorAll('.imgscl');
let c=0;
let n=0;
function xyz(){
    c=-1;
    n=4000;
    imgscl.forEach(el => {
        c++
        setTimeout(()=>{
            el.classList.toggle('imgsclhover'); 
        }, c*1000)
    });
}

xyz();


setInterval(() => {
    xyz();
}, 4000);
