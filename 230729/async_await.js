// goMart()
// pickDrink()
//   .then(pay)
//   .catch((err) => {
//     console.log(err)
//   })

let product
let price
let flag = false
excute()

function goMart() {
  console.log('마트도착')
}

function pickDrink(money) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!')
      product = '제로 콜라'
      price = 3000
      if (money >= 3000) {
        flag = true
        resolve()
      } else {
        reject('돈이 부족합니다.')
      }
    }, 3000)
  })
}

function pay() {
  console.log(product + ': ' + price)
}

async function excute() {
  goMart()
  await pickDrink(4000).catch((잔액부족) => {
    console.log(잔액부족)
  })
  if (flag) {
    pay()
  }
}
