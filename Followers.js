// defini a classe card
class FollowList {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor() {
    this.followers = document.querySelector("#lista")
  }

  // monta o HTML do card com os dados do JSON
  showFollowers(data) {
    // cria uma variavel que ira armazenar todo esse HTML
    let followersCard = ''

    data.followers.map(function (follower) {

      followersCard += `
        <div class="card">
          <h2>${noticia.titulo}</h2>
          <p>${noticia.chamada}</p>
          <a href="${noticia.link}">${noticia.link}</a>
        </div>
      `;
    })

    this.followers.innerHTML = followersCard

  }
}