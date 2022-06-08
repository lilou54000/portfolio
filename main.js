// popup
// spy on 3 elements
const btnPopup= document.getElementById('btnPopup');
const overlay= document.getElementById('overlay');
const btnClose= document.getElementById('btnClose');

//event
btnPopup.addEventListener('click',openModal);

btnClose.addEventListener('click',closePopup);

//function show popup
function openModal(){
    overlay.style.display='block';
}

//function close popup
function closePopup(){
    overlay.style.display='none';
}


//function darkmode

const mode = document.querySelector('.mode-switch')
mode.addEventListener('click',()=>{
    mode.classList.toggle('active');
    document.classList.toggle('dark');
} )