const task = document.querySelector('.input-text')
const send = document.querySelector('.send')
const pen = document.querySelector('.task-container')
const con = document.querySelector('.title2')
var i = 0;
var pa = {
    datapas : function(pas){
    return pa[i] = pas}};
    //Here will stay stored the h2 element and every attributes that it has
var right = {
    eventright: function(){},
    dataright : function(rights){
    return right[i] = rights},};
    //Here will stay stored the button right with im1 insert in him how appendChild and his attributes
var im1 = {
    dataim1 : function(im1s){
    return im1[i] = im1s}};
    //This is the stock of im1
var edit = {
    dataedit : function(edits){
    return edit[i] = edits}};
    //Here will stay stored the button edit with im2 insert in him how appendChild and his attributes
var im2 = {
    dataim2 : function(im2s){
    return im2[i] = im2s}};
    //This is the stock of im2
var era = {
    dataera : function(eras){
    return era[i] = eras}};
//Here will stay stored the button era with im3 insert in him how appendChild and his attributes
var im3 = {
    dataim3 : function(im3s){
    return im3[i] = im3s}};
    //This is the stock of im2
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
document.addEventListener('keydown', function(c){
if(c.code === "Backspace"){
task.value = task.value.slice(0, -1);
c.preventDefault();
}
})
//This event is diferent of previous because the key backspace don't act like the others
function resp() {
    pa[i] = document.createElement('h2');
    pa[i].innerHTML = task.value;
    pen.appendChild(pa[i]);
    pa.datapas(pa[i])
    right[i] = document.createElement('button');
    im1[i] = document.createElement('img')
    right[i].type = "button";
    right[i].id = "input-concluid";
    pen.appendChild(right[i]);
    right.dataright(right[i])
    im1[i].src = "https://i.pinimg.com/originals/47/05/a8/4705a8ab7c03092ef04ec4ec578493e1.jpg";
    im1[i].className = "image"
    right[i].appendChild(im1[i]);
    edit[i] = document.createElement('button');
    im2[i] = document.createElement('img')
    edit[i].type = "button";
    edit[i].id = "input-concluid";
    pen.appendChild(edit[i]);
    im2[i].src = "https://i.pinimg.com/originals/74/e0/8b/74e08b79ca412fb2462f7a7500cf91f8.jpg";
    im2[i].className = "image";
    edit[i].appendChild(im2[i]);
    era[i] = document.createElement('button')
    im3[i] = document.createElement('img')
    era[i].type = "button";
    era[i].id = "input-concluid";
    pen.appendChild(era[i]);
    im3[i].src = "https://i.pinimg.com/736x/34/f3/b1/34f3b1a55e5e38f6c50910300fbd5639.jpg";
    im3[i].className = "image";
    era[i].appendChild(im3[i]);
    task.value = ""
    right[i].addEventListener("click", function(a){
        return function(){console.log(`you click in the ${a} right button`)}}(i+1))
    return i++
    } 
//this code set will create and add the h2 and buttons to the div "Pedent"
