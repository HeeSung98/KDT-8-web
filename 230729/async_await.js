// goMart()
// pickDrink()
//   .then(pay)
//   .catch((err) => {
//     console.log(err)
//   })

excute()

function goMart() {
  console.log('마트도착')
}

function pickDrink(callback) {
  return new Promise(function (resolve, rejcet) {
    setTimeout(function () {
      console.log('고민 끝!')
      product = '제로 콜라'
      price = 3000
      if (price <= 3000) {
        resolve()
      } else {
        rejcet('돈없는디?')
      }
    }, 3000)
  })
}

function pay() {
  console.log(product + ': ' + price)
}

async function excute() {
  goMart()
  await pickDrink()
  pay()
}