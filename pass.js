const allDay = ["Dimanche","Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
function getHour(){
    let d = new Date()
    return d.getHours() + ":" + (String(d.getMinutes()).length == 1?"0":"") + d.getMinutes() + ":" + (String(d.getSeconds()).length == 1?"0":"") + d.getSeconds()
}

var value_or_null = (document.cookie.match(/^(?:.*;)?\s*name\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
if(!value_or_null){
    window.location.href = "./index.html"
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

var carte = getCookie("carte")
var nom = getCookie("name")

if (!carte || !nom) window.location.href = "./index.html";

document.getElementById("user").innerHTML = nom;

var notification = document.getElementById("retour")
notification.addEventListener("click", function() {
  document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  window.location.href = "./index.html"
});

let d = new Date();

document.getElementById("day").innerHTML = allDay[d.getDay()]
let h;
if(d.getHours() < 11 || (d.getHours() == 11 && d.getMinutes() <=49)){
    h = "/11h";
}else{
    h = "/12h";
}

function loop(){
    d = new Date();

    document.getElementById("heure").innerHTML = getHour()
    if(d.getMinutes() == 50 && d.getHours() == 11 && h == "/11h"){
        window.location.href = "../menu/menu.html";
    }

    document.getElementById("code").innerHTML = hashDate()


    setTimeout(loop,100);

}
loop();

function hashDate(){
    let d = new Date()
    return (d.getHours() + d.getMinutes() +Math.floor(d.getSeconds()/10))**3 %1000
}


const containerElement = document.getElementById('single');
const bcid = 'bc'+carte;
const bcimg = document.createElement('img');
bcimg.className = "barcode";
bcimg.setAttribute('id', bcid);
containerElement.appendChild(bcimg);
JsBarcode('#'+bcid, carte, {format: 'code39'});

document.getElementById('retour').addEventListener('click', function() {
    console.log('retour');
});
