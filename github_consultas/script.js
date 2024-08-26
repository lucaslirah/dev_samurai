function fetchUserData() {
  // capturar o valor inputado pelo usuário no input de texto com id "username" no html
  const username = document.querySelector('#username').value;
  // endpoint do github dinâmica
  const url = `https://api.github.com/users/${username.toLowerCase()}`;

  // Usando ajax para consultar dados do github
  // const xhr = new XMLHttpRequest();
  // xhr.open('GET', url, true);
  // xhr.send(null);
  // xhr.onload = function () {
  //   if (xhr.status === 200) {
  //     const data = JSON.parse(xhr.responseText);
  //     // montar a consulta da api em uma div no html chamada de user-info
  //     const userInfo = document.querySelector('#user-info');
  //     userInfo.innerHTML = `
  //       <img src="${data.avatar_url}" alt="${data.name}" width=250>
  //       <h2>${data.login}</h2>
  //       <p>Seguidores: ${data.followers}</p>
  //       <p>Seguindo: ${data.following}</p>
  //       `;
  //     document.appendChild(userInfo);
      
  //   } else {
  //     console.error('Error:', xhr.status);
  //   }
  // }

  // Consulta de dados da api do github usando fetch  
  // fetch(url)
  //  .then(response => response.json())
  //  .then(data => {
  //     // montar a consulta da api em uma div no html chamada de user-info
  //     const userInfo = document.querySelector('#user-info');

  //     userInfo.innerHTML = `
  //       <img src="${data.avatar_url}" alt="${data.name}" width=250>
  //       <h2>${data.login}</h2>
  //       <p>Seguidores: ${data.followers}</p>
  //       <p>Seguindo: ${data.following}</p>
  //     `;

  //     document.appendChild(userInfo);
  //  })
  //  .catch(error => console.error('Error:', error));


  // Outra maneira de fazer a mesma coisa usando async/await
  // async function getUser() {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  //     const data = await response.json();

  //     // montar a consulta da api em uma div no html chamada de user-info
  //     const userInfo = document.querySelector('#user-info');

  //     userInfo.innerHTML = `
  //       <img src="${data.avatar_url}" alt="${data.name}" width=250>
  //       <h2>${data.login}</h2>
  //       <p>Seguidores: ${data.followers}</p>
  //       <p>Seguindo: ${data.following}</p>
  //     `;

  //     document.appendChild(userInfo);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
  // getUser();
}