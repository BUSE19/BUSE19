
   function uyari(){
       alert("Sayfanın sonuna geldiniz");
   }
   setInterval(()=>window.location.reload(false),120000);

   var timerId;
 
function uyariVer() {
timerId = window.setTimeout(zamanlayici, 3000);
}
 
function zamanlayici() {
alert("tıklama üzerinden 3000ms geçti");
}
 
function zamanlamaIptal() {
window.clearTimeout(timerId);
}

//window (taraycı penceresi) üzerinde fare hareket ettirildikçe çalışacak kodlar
window.onmousemove=function(olay)
{
//gerçekleşen olayla ilgili tüm bilgi olay değişkenine aktarılıyor.
 
var xpos=document.getElementById('x');
var ypos=document.getElementById('y');
var kutu=document.getElementById('kutu');
 
//clientX: farenin x eksenindeki konumu
//clientY farenin y eksenindeki konumu
xpos.innerHTML=olay.clientX;
ypos.innerHTML=olay.clientY;
 
//ÖNEMLİ NOT: HAREKET ETTİRİLECEK NESNENİN POZİSYON DEĞERİ ABSOLUTE OLMAK ZORUNDA!!!
kutu.style.left=olay.clientX+"px";
kutu.style.top=olay.clientY+"px";
 
} 
/* body etiketine ulaşıp arkaplan rengini beyaz yaptırma*/ 
var body=document.getElementById('body');
body.style.background='white';


var tamEkranButon = document.getElementById("tamekran-button");
 
function tamEkranYap() {
/*tam ekran yapılacak div*/
var tamEkranDiv = document.getElementById("tamekran");
 
/*tarayıcının tam ekranı destekleyip desteklemediğini kontrol edyiyoruz. Tam ekran yapılacak div ile.*/ 
var tamEkranFonk=tamEkranDiv.requestFullscreen||
tamEkranDiv.mozRequestFullScreen||
tamEkranDiv.msRequestFullscreen||
tamEkranDiv.webkitRequestFullScreen;
 
tamEkranFonk.call(tamEkranDiv); 
}
tamEkranButon.addEventListener('click', tamEkranYap);

