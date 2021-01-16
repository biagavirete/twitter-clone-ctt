// defini a classe card
class UserCard {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor() {
    this.dados_usuario = document.querySelector(".profile-header")
  }

  showUser(data) {
    let card = ''

    card = `
      <h3 class="profile-fullname"><a>${data[0].nome}<a></h3>
            <h2 class="profile-element"><a>@${data[0].usuario}</a></h2>
            <a class="profile-element profile-website" hrerf=""><i
                class="octicon octicon-link"></i>&nbsp;${data[0].usuario}.com</a>
            <a class="profile-element profile-website" hrerf=""><i
                class="octicon octicon-location"></i>&nbsp;${data[0].local}</a>
            <h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined ${data[0].cadastro}</h2>
            <button class="btn btn-search-bar tweet-to-btn">Tweet to ${data[0].nome}</button>
      `;

    this.dados_usuario.innerHTML = card
  }
}
