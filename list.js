const task = document.querySelector('.input-text')
const send = document.querySelector('.send')
const pen = document.querySelector('.task-container')
const con = document.querySelector('.title2')
var i = 0
send.addEventListener("click", resp);
send.addEventListener("keypress", resp)

function resp() {
    let pa = document.createElement('h2');
    pa.innerHTML = task.value;
    pen.appendChild(pa);
    let ta1 = document.createElement('button');
    let im1 = document.createElement('img');
    ta1.type = "button";
    ta1.id = "input-concluid";
    pa.appendChild(ta1);
    im1.src = "https://i.pinimg.com/originals/47/05/a8/4705a8ab7c03092ef04ec4ec578493e1.jpg";
    im1.className = "image"
    ta1.appendChild(im1);
    let ta2 = document.createElement('button')
    let im2 = document.createElement('img')
    ta2.type = "button";
    ta2.id = "input-concluid";
    pa.appendChild(ta2);
    im2.src = "https://i.pinimg.com/originals/74/e0/8b/74e08b79ca412fb2462f7a7500cf91f8.jpg";
    im2.className = "image";
    ta2.appendChild(im2);
    let ta3 = document.createElement('button')
    let im3 = document.createElement('img')
    ta3.type = "button";
    ta3.id = "input-concluid";
    pa.appendChild(ta3);
    im3.src = "https://i.pinimg.com/736x/34/f3/b1/34f3b1a55e5e38f6c50910300fbd5639.jpg";
    im3.className = "image";
    ta3.appendChild(im3)}