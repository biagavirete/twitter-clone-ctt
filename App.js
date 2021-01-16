const user = new User()
const user_card = new UserCard()
const follower = new Follower()
const follower_card = new FollowersCard()
const tweet = new Tweet()
const tweet_card = new TweetsCard()

user.getUser()
  .then(function (response) {
    response.json()
      .then(function (data) {
        user_card.showUser(data)
      })
  })

follower.getFollowers()
  .then(function (response) {
    response.json()
      .then(function (data) {
        follower_card.showFollowers(data)
      })
  })

tweet.getTweets()
  .then(function (response) {
    response.json()
      .then(function (data) {
        tweet_card.showTweets(data)
      })
  })