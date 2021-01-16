class FollowersCard {
  constructor() {
    this.followers = document.querySelector("#followers-list")
  }

  showFollowers(data) {
    let followers_card = ''

    folllowers_card = `
      <h3 class="profile-fullname"><a>${data[0].nome}<a></h3>
            <h2 class="profile-element"><a>@${data[0].usuario}</a></h2>
            <a class="profile-element profile-website" hrerf=""><i
                class="octicon octicon-link"></i>&nbsp;${data[0].usuario}.com</a>
            <a class="profile-element profile-website" hrerf=""><i
                class="octicon octicon-location"></i>&nbsp;${data[0].local}</a>
            <h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined ${data[0].cadastro}</h2>
            <button class="btn btn-search-bar tweet-to-btn">Tweet to ${data[0].nome}</button>
      `;

    this.followers.innerHTML = followers_card
  }
}
