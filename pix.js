const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue){
    alert('Insira uma URL ou texto para gerar um QR code')
    return;
}

generateBtn.innerText ="Colado com sucesso!";
qrImg.src=`qrcoode.pngdata${qrValue}`
qrImg.addEventListener('load' , () => {
    generateBtn.innerText ="gerar Qr Code";
    container.classList.add('active');
  });
});

qrInput.addEventListener('keyup' , () =>{
    if (!qrInput.value){
        container.classList.remove('active');
    };
});