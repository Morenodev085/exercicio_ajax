document.addEventListener('DOMContentLoaded', function() {
    const nomeElement = document.querySelector('#nome');
    const nomedeusuarioElement = document.querySelector('#nomedeusuario');
    const repositoriosElement = document.querySelector('#repositorio');
    const perfilElement = document.querySelector('#perfil');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');


    fetch('https://api.github.com/users/Morenodev085')
    .then(function(res) {
        return res.json();
    })
    .then(function(json){
        nomeElement.innerText = json.name;
        nomedeusuarioElement.innerText = json.login;
        perfilElement.src = json.avatar_url;
        seguindoElement.innerText = json.following;
        seguidoresElement.innerText = json.followers;
        repositorios.innerText = json.public_repos
        linkElement.href = json.html_url
    })
})