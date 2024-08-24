// capturar uma variável chamada button e outra app. Realizar uma consulta na api do github, trazendo os dados de um usuários e atribuindo para variávels de mesmo nome que serão apreentadas na div app, usando ajax.

let app = document.querySelector("#app");
let buttonGithub = document.querySelector("#fetchtGithub");

buttonGithub.addEventListener("click", getGithubUserData);

// função para buscar dados do github e mostrar em tela
function getGithubUserData() {
  let username = document.querySelector("#username").value;

  const xhr = new XMLHttpRequest();
  // abre a conexão com a API do github
  // true para fazer a solicitação assíncrona (async)
  // false para fazer a solicitação síncrona (sync)
  // GET para buscar dados, POST para enviar dados, PUT para atualizar dados, DELETE para deletar dados
  xhr.open(
    "GET",
    `https://api.github.com/users/${username.toLowerCase()}`,
    true
  );
  xhr.send(null);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      app.innerHTML = `
        <div>Bio: ${data.bio}</div>
        <div>Nome: ${data.name}</div>
        <div>Localização: ${data.location}</div>
        <div>Repositórios: ${data.public_repos}</div>
        <div>Seguidores: ${data.followers}</div>
        <div>Seguindo: ${data.following}</div>
        `;
    } else {
      app.innerHTML = "Carregando...";
    }
  };
}