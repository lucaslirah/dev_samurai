let passwordLength = 8;

const upperCaseCheck = document.querySelector("#uppercase-check");
const numberCheck = document.querySelector("#number-check");
const symbolCheck = document.querySelector("#symbol-check");

const passwordLengthText = document.querySelector('#password-length-text');
const passwordInput = document.querySelector('#password');

const securityIndicatorBar = document.querySelector('#security-indicator-bar');

const copiedMessage = document.querySelector('#copied-message');

const generatePasswords = ()=> {
  let chars = "abcdefghjklmnpqrstuvwxyz";
  let upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  let symbolChars = "?!@#&*+-$%";
  let numberChars = "1234567890";

  if(upperCaseCheck.checked){
    chars += upperCaseChars;
  }
  
  if(numberCheck.checked){
    chars += numberChars;
  }
  
  if(symbolCheck.checked){
    chars += symbolChars;
  }

  let password = '';

  for(let i=0; i<passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.querySelector('#password').value = password;

  calculateStrength();
  calculateFontSize();
}

const calculateStrength = () => {
  // T*15 + M*20 + N*25 + S*40 = 100
  const percentage = Math.round(
    (passwordLength / 30) * 15 +
    (upperCaseCheck.checked ? 20 : 0) +
    (numberCheck.checked ? 25 : 0) +
    (symbolCheck.checked ? 40 : 0)
  );

  if(percentage > 50){
    securityIndicatorBar.classList.remove('critical');
    securityIndicatorBar.classList.remove('warning');
    securityIndicatorBar.classList.add('safe');

  }else if(percentage > 35){
    securityIndicatorBar.classList.remove('critical');
    securityIndicatorBar.classList.add('warning');
    securityIndicatorBar.classList.remove('safe');
  }else{
    securityIndicatorBar.classList.add('critical');
    securityIndicatorBar.classList.remove('warning');
    securityIndicatorBar.classList.remove('safe');
  }

  if(percentage === 100){
    securityIndicatorBar.classList.add('completed');
  }else{
    securityIndicatorBar.classList.remove('completed');
  }
  securityIndicatorBar.style.width = `${percentage}%`;
}

const calculateFontSize = () => {
  if(passwordLength >= 30){
    passwordInput.classList.remove('font-small');
    passwordInput.classList.add('font-xsmall');
  } else if(passwordLength > 22) {
    passwordInput.classList.add('font-small');
    passwordInput.classList.remove('font-xsmall');
  } else{
    passwordInput.classList.remove('font-small');
    passwordInput.classList.remove('font-xsmall');
  }
}

const copyPassword = () => {
  const passwordElement = document.querySelector('#password');
  // passwordElement.select();
  // document.execCommand('copy');
  // alert('Senha copiada com sucesso!');

  // usando navigator.clipboard
  navigator.clipboard.writeText(passwordElement.value).then(() => {
    //criar um elemento html com uma mensagem: copiado para área de transferência

    if(copiedMessage.classList.contains('copied-message')){
      copiedMessage.innerText = 'Senha já copiada!';
      return;
    }
    copiedMessage.innerText = 'Senha copiada!';
    copiedMessage.classList.add('copied-message');

  }, (error) => {
    console.error('Error copying text: ', error);
  });
}

const resetCopiedMessage = () => {
  copiedMessage.innerText = '...';
  copiedMessage.classList.remove('copied-message');
}

document.querySelector('#password-length').addEventListener('input', (e) => {
  passwordLength = e.target.value;
  passwordLengthText.textContent = passwordLength;
  generatePasswords();
});

upperCaseCheck.addEventListener('click', ()=>{
  resetCopiedMessage();
  generatePasswords();
});
numberCheck.addEventListener('click', ()=>{
  resetCopiedMessage();
  generatePasswords();
});
symbolCheck.addEventListener('click', ()=>{
  resetCopiedMessage();
  generatePasswords();
});

document.querySelector('#copy-password-1').addEventListener('click', copyPassword);
document.querySelector('#copy-password-2').addEventListener('click', copyPassword);
document.querySelector('.renew').addEventListener('click', ()=>{
  generatePasswords();
  resetCopiedMessage();
});

generatePasswords();