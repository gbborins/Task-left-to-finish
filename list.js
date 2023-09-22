const task = document.querySelector('.input-text')
const send = document.querySelector('.send')
const concluid1 = document.querySelector('.textb1')
const concluid2 = document.querySelector('.textb2')
const concluid3 = document.querySelector('.textb3')
const concluid4 = document.querySelector('.textb4')
const concluid5 = document.querySelector('.textb5')
const concluid6 = document.querySelector('.textb6')
const pendent1 = document.querySelector('.textc1')
const pendent2 = document.querySelector('.textc2')
const pendent3 = document.querySelector('.textc3')
const pendent4 = document.querySelector('.textc4')
const pendent5 = document.querySelector('.textc5')
const pendent6 = document.querySelector('.textc6')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')
const box6 = document.querySelector('.box6')
const box7 = document.querySelector('.box7')
const box8 = document.querySelector('.box8')
const box9 = document.querySelector('.box9')
const box10 = document.querySelector('.box10')
send.addEventListener("click", resp);
function resp() {
    if(pendent1.innerHTML == "1"){
    pendent1.innerHTML = task.value;}
    else if(pendent1.innerHTML !== "1" && pendent2.innerHTML == "2"){
        pendent2.innerHTML = task.value;
    }else if(pendent2.innerHTML !== "2" && pendent3.innerHTML == "3"){
        pendent3.innerHTML = task.value;
   }else if(pendent3.innerHTML !== "3" && pendent4.innerHTML == "4"){
            pendent4.innerHTML = task.value;
        }else if(pendent4.innerHTML !== "4" && pendent5.innerHTML == "5"){
                pendent5.innerHTML = task.value;}
    }