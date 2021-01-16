class TweetsCard {
  constructor() {
    this.tweets_list = document.querySelector("#tweets-list")
  }

  showTweets(data) {
    let tweets_card = ''

    data.tweets.map((tweet) => {
      tweets_card += `
      <li class="tweet-card">
              <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${tweet.nome}</strong>
                  </span>
                  <span class="username">${tweet.usuario}</span>
                  <span class="tweet-time">- ${tweet.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0">${tweet.mensagem}
                  </p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span> ${tweet.comentarios}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${tweet.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${tweet.likes}</span>
                  </a>
                </div>
              </div>
            </li>
      `
    })

    this.tweets_list.innerHTML = tweets_card
  }
}
