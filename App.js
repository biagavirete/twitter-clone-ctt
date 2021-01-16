const user = new User()
const user_card = new UserCard()

user.getUser()

  .then(function (response) {
    response.json()
      .then(function (data) {
        user_card.showUser(data)
      })
  })
