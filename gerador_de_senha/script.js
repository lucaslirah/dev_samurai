let passwordLength = 16;

    const generatePasswords = ()=> {
      let chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ1234567890?!@#&*+-$%";
  
      let password = '';

      for(let i=0; i<passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }

      document.querySelector('#password').value = password;
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

    const passwordLengthElement = document.querySelector('#password-length');
    passwordLengthElement.addEventListener('input', (e) => {
      passwordLength = e.target.value;

      generatePasswords();
    });
    
    const copyPasswordButton = document.querySelector('#copy-password');
    copyPasswordButton.addEventListener('click', copyPassword);

    generatePasswords();