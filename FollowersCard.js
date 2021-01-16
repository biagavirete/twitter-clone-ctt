class FollowersCard {
  constructor() {
    this.followers = document.querySelector("#followers-list")
  }

  showFollowers(data) {
    let followers_card = ''

    data.followers.map((follower) => {
      followers_card += `
      <li class="tweet-card" >
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong>${follower.nome}</strong>
                      </span>
                      <span class="username">${follower.usuario}</span>
                    </div>

                    <button class="btn btn-follow">Follow</button>
                  </div>
                </li>
      `
    })

    this.followers.innerHTML = followers_card
  }
}
