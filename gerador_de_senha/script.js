let passwordLength = 8;

const upperCaseCheck = document.querySelector("#uppercase-check");
const numberCheck = document.querySelector("#number-check");
const symbolCheck = document.querySelector("#symbol-check");

const passwordLengthText = document.querySelector('#password-length-text');

const securityIndicatorBar = document.querySelector('#security-indicator-bar');

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

  securityIndicatorBar.style.width = `${percentage}%`;
}

const copyPassword = () => {
  const passwordElement = document.querySelector('#password');
  // passwordElement.select();
  // document.execCommand('copy');
  // alert('Senha copiada com sucesso!');

  // usando navigator.clipboard
  navigator.clipboard.writeText(passwordElement.value).then(() => {
    alert('Senha copiada com sucesso!');
  }, (error) => {
    console.error('Error copying text: ', error);
  });
}

document.querySelector('#password-length').addEventListener('input', (e) => {
  passwordLength = e.target.value;
  passwordLengthText.textContent = passwordLength;
  generatePasswords();
});

upperCaseCheck.addEventListener('click', generatePasswords);
numberCheck.addEventListener('click', generatePasswords);
symbolCheck.addEventListener('click', generatePasswords);

document.querySelector('#copy-password-1').addEventListener('click', copyPassword);
document.querySelector('#copy-password-2').addEventListener('click', copyPassword);

generatePasswords();