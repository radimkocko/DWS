let first = document.getElementById('java');

first.addEventListener('click', function() {
    alert("Dobrý den")
})

const second_button = document.getElementById('second_button');
second_button.addEventListener('click', function(){
    second_button.textContent = "Hello World!";
});

const textElement = document.getElementById('text');
const buttonElement = document.getElementById('zmena');
buttonElement.addEventListener('click', function() {
 textElement.textContent = 'Text byl změněn!';
});
const objevElement = document.getElementById('objev');
const tadyElement = document.getElementById('tady');
objevElement.addEventListener('click', function() {
 tadyElement.textContent = 'Text se našel!';
});
function hellouser(){
let user = document.getElementById('user').value;
alert('Vítám tě na této webové stránce ' + user);
}
let cas = document.getElementById('cas');
let time = document.getElementById('time');
time.addEventListener('click', function(){
   const actualtime = new Date();
   const formaltime = actualtime.toLocaleTimeString();
   cas.textContent = 'Aktuální čas je: ' + formaltime;
})
let datum = document.getElementById('datum');
let date = document.getElementById('date');
date.addEventListener('click', function(){
   const actualdate = new Date();
   const formaldate = actualdate.toLocaleDateString();
   datum.textContent = 'Aktuální datum je: ' + formaldate;
})
function secteni3() {
    let num = +document.getElementById("cislo").value; 
    document.getElementById("vysledek").textContent = num + 3; 
}
function secist() {
    let cislo1 = +document.getElementById('cislo1').value;
    let cislo2 = +document.getElementById('cislo2').value;
    document.getElementById('vysledek2').textContent = cislo1 + cislo2;
}
const obrazek = document.getElementById("obrazek");
obrazek.addEventListener("mouseover", function() {
    obrazek.style.transform = "scale(1.5)";  
});

obrazek.addEventListener("mouseout", function() {
    obrazek.style.transform = "scale(1)";  
});
