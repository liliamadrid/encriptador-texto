const textArea = document.querySelector(".form__textarea");
const imagenMuneco = document.querySelector(".return__img");
const loaderCircular = document.querySelector(".loader");
const resultTitle = document.querySelector(".return__msn__title");
const resultText = document.querySelector(".return__msn__text");
const btnEncriptar = document.querySelector(".form__container__btns__btn");
const btnDesencriptar = document.querySelectorAll(".form__container__btns__btn");
const btnCopiar = document.querySelector(".return__msn__btn");


const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1]; 
            break; 
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
};

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
};


textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    console.log(e.target.value);
    loaderCircular.classList.remove("hidden");
    resultTitle.textContent = "Capturando Mensaje";
    resultText.textContent = "";
});

//BOTON ENCRIPTAR
btnEncriptar.addEventListener('click', (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    loaderCircular.classList.add("hidden");
    resultText.textContent = mensajeEncriptado;
    btnCopiar.classList.remove("hidden");
    resultTitle.textContent = "El mensaje secreto es:";
});

//BOTON DESENCRIPTAR
btnDesencriptar[1].addEventListener('click', (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    loaderCircular.classList.add("hidden");
    resultText.textContent = mensajeDesencriptado;
    resultTitle.textContent = "El mensaje secreto es:";
    btnCopiar.classList.remove("hidden");
});

btnCopiar.addEventListener('click', ()=> {
    let copyText = resultText.textContent;
    navigator.clipboard.writeText(copyText).then(()=>{
    //imagenMuneco.style.display = "block";   
    loaderCircular.classList.add("hidden");
    resultTitle.textContent = "El mensaje fue copiado";
    btnCopiar.classList.add("hidden");
    resultText.textContent = "";
    })
});