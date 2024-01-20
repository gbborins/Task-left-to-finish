const task = document.querySelector('.input-text')
const send = document.querySelector('.send')
const pen = document.querySelector('.task-container')
const con = document.querySelector('.title2')
const body = document.querySelector('.html')
var i = 0
send.addEventListener("click", resp);
body.addEventListener("keypress", function(a){
    if (a.key === "Enter"){
        a.preventDefault();
        resp()}
    else if(a.code === "Space"){
        a.preventDefault();
    } else if(65 < a.keycode < 91){
    a.preventDefault();
    }task.value += String.fromCharCode(a.keyCode)
})
body.addEventListener('keydown', function(c){
if(c.code === "Backspace"){
task.value = task.value.slice(0, -1);
c.preventDefault();
}
})
function resp() {
    let pa = {0: document.createElement('h2')};
    pa[i] = document.createElement('h2');
    pa[i].innerHTML = task.value;
    pen.appendChild(pa[i]);
    let right = {0:document.createElement('button')};
    let im1 = {0:document.createElement('img')};
    right[i] = document.createElement('button');
    im1[i] = document.createElement('img')
    right[i].type = "button";
    right[i].id = "input-concluid";
    pa[i].appendChild(right[i]);
    im1[i].src = "https://i.pinimg.com/originals/47/05/a8/4705a8ab7c03092ef04ec4ec578493e1.jpg";
    im1[i].className = "image"
    right[i].appendChild(im1[i]);
    let edit = {0:document.createElement('button')}
    let im2 = {0:document.createElement('img')}
    edit[i] = document.createElement('button');
    im2[i] = document.createElement('img')
    edit[i].type = "button";
    edit[i].id = "input-concluid";
    pa[i].appendChild(edit[i]);
    im2[i].src = "https://i.pinimg.com/originals/74/e0/8b/74e08b79ca412fb2462f7a7500cf91f8.jpg";
    im2[i].className = "image";
    edit[i].appendChild(im2[i]);
    let era = {0:document.createElement('button')}
    let im3 = {0:document.createElement('img')}
    era[i] = document.createElement('button')
    im3[i] = document.createElement('img')
    era[i].type = "button";
    era[i].id = "input-concluid";
    pa[i].appendChild(era[i]);
    im3[i].src = "https://i.pinimg.com/736x/34/f3/b1/34f3b1a55e5e38f6c50910300fbd5639.jpg";
    im3[i].className = "image";
    era[i].appendChild(im3[i])
    i++}