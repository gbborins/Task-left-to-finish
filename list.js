const task = document.querySelector('.input-text')
const send = document.querySelector('.send')
const Pendent = document.querySelector('.Task-Pen')
const Concluided = document.querySelector('.Task-Con')
var i = 0;
var DataFunction = {
    DataText : function(ElementText){
        if(typeof DataFunction[i] !== 'object' || DataFunction[i] === null){
        DataFunction[i] = {}}
       return DataFunction[i].ElementText = ElementText},
    DataRight : function(ElementRight){
        return DataFunction[i].ElementRight = ElementRight},
    DataIm1 : function(im1s){
        return DataFunction[i].im1s = im1s},
    DataEdit : function(ElementEdit){
        return DataFunction[i].ElementEdit = ElementEdit},
    DataIm2 : function(im2s){
        return DataFunction[i].im2s = im2s},
    DataErase : function(ElementErase){
        return DataFunction[i].ElementErase = ElementErase},
    DataIm3 : function(im3s){
        return DataFunction[i].im3s = im3s},
}
var ConfirmButton = (i) => {
    return function(){
    Concluided.appendChild(DataFunction[i].ElementText);
    Concluided.appendChild(DataFunction[i].ElementRight);
    Concluided.appendChild(DataFunction[i].ElementEdit);
    Concluided.appendChild(DataFunction[i].ElementErase);}}
//this code set will add the h2 and buttons to the div "Concluided"
send.addEventListener("click", resp);
//This event will activate if you press the button "to send"
document.addEventListener("keypress", function(a){
    if (a.key === "Enter"){
        a.preventDefault();
        resp()}
    else if(a.code === "Space"){
        a.preventDefault();
    } else if(64 < a.keyCode < 91){
    a.preventDefault();
    } task.value += String.fromCharCode(a.keyCode)
})
//The event will get every key that you pressed, remove the Default of them and add the key pressed to the "write yout task"
document.addEventListener('keydown', function(BackSpaceKey){
if(BackSpaceKey.code === "Backspace"){
task.value = task.value.slice(0, -1);
BackSpaceKey.preventDefault();
}
})
//This event is diferent of previous because the key backspace don't act like the others
function resp() {
    DataFunction.DataText(document.createElement('h2'));
    DataFunction[i].ElementText.innerHTML = task.value
    Pendent.appendChild(DataFunction[i].ElementText);
    DataFunction.DataRight(document.createElement('button'));
    DataFunction.DataIm1(document.createElement('img'));
    DataFunction[i].ElementRight.type = "button";
    DataFunction[i].ElementRight.id = "input-image";
    Pendent.appendChild(DataFunction[i].ElementRight);
    DataFunction[i].im1s.src = "https://i.pinimg.com/originals/47/05/a8/4705a8ab7c03092ef04ec4ec578493e1.jpg";
    DataFunction[i].im1s.className = "image";
    DataFunction[i].ElementRight.appendChild(DataFunction[i].im1s);
    DataFunction.DataIm2(document.createElement('img'));
    DataFunction.DataEdit(document.createElement('button'));
    DataFunction[i].ElementEdit.type = "button";
    DataFunction[i].ElementEdit.id = "input-image";
    Pendent.appendChild(DataFunction[i].ElementEdit);
    DataFunction[i].im2s.src = "https://i.pinimg.com/originals/74/e0/8b/74e08b79ca412fb2462f7a7500cf91f8.jpg";
    DataFunction[i].im2s.className = "image";
    DataFunction[i].ElementEdit.appendChild(DataFunction[i].im2s);
    DataFunction.DataErase(document.createElement('button'));
    DataFunction.DataIm3(document.createElement('img'));
    DataFunction[i].ElementErase.type = "button";
    DataFunction[i].ElementErase.id = "input-image";
    Pendent.appendChild(DataFunction[i].ElementErase);
    DataFunction[i].im3s.src = "https://i.pinimg.com/736x/34/f3/b1/34f3b1a55e5e38f6c50910300fbd5639.jpg";
    DataFunction[i].im3s.className = "image";
    DataFunction[i].ElementErase.appendChild(DataFunction[i].im3s);
    task.value = "";
    DataFunction[i].ElementRight.addEventListener("click", ConfirmButton(i));
    return i++
    } 
//this code set will create and add the h2 and buttons to the div "Pendent"
