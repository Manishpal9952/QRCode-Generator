let inputBtn = document.getElementById('inputbtn');
let select = document.getElementById('select');
let generator = document.getElementById('gen');
let download = document.getElementById('down');
let container = document.querySelector('.qr');

let size = select.value;
generator.addEventListener('click', (e)=>{
    generateORCode();
});

select.addEventListener('change',()=>{
    size = e.target.value;
    generateORCode();
})

function generateORCode(){
    container.innerHTML = "";
     new QRCode(container, {
        text:inputBtn.value,
        height:size,
        width:size,
        colorLight:'white',
        colorDark:'black',
     });
}