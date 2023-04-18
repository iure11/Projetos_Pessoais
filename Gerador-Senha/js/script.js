let sliderElement = document.querySelector("#slider");
let elementoBotao = document.querySelector("#button");

let sizePassword = document.querySelector("#caracteres");
let pwd =  document.querySelector("#pwd");

let containerPwd =  document.querySelector("#pwdContainer");

const caracteresPossiveis = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_.";
const caracteresEspeciais = "!@#$%&*_.";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = () => sizePassword.innerHTML = sliderElement.value;

const generatePassword = () => {
  let pass = '';
  let hasSpecialChar = false;
  for(let i = 0, n = caracteresPossiveis.length; i < sliderElement.value; ++i){
    pass += caracteresPossiveis.charAt(Math.floor(Math.random() * n));
  }

  for(let i = 0; i < caracteresEspeciais.length; i++){
    if(pass.includes(caracteresEspeciais[i])){
      hasSpecialChar = true;
      break;
    }
  }

  if(hasSpecialChar){
    console.log(pass);
    containerPwd.classList.remove("hide");
    pwd.innerHTML = pass;
    novaSenha = pass;
  } else {
    generatePassword();
  }
};

const copyPassword = () => {
  navigator.clipboard.writeText(novaSenha);
  alertWifi("Senha copiada com sucesso");
};