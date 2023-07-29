// let product
// let price

// goMart()
// pickDrink(pay)

// function goMart() {
//   console.log('마트도착')
// }

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log('고민 끝!')
//     product = '제로 콜라'
//     price = 2000
//     callback(product, price)
//   }, 3000)
// }

// function pay(product, price) {
//   console.log(product + ': ' + price)
// }

// setTimeout(function () {
//   document.querySelector('body').style.backgroundColor = 'red'
//   setTimeout(function () {
//     document.querySelector('body').style.backgroundColor = 'orange'
//     setTimeout(function () {
//       document.querySelector('body').style.backgroundColor = 'red'
//       setTimeout(function () {
//         document.querySelector('body').style.backgroundColor = 'red'
//         setTimeout(function () {
//           document.querySelector('body').style.backgroundColor = 'red'
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

goMart()
pickDrink()
  .then(pay)
  .catch((err) => {
    console.log(err)
  })

function goMart() {
  console.log('마트도착')
}

function pickDrink(callback) {
  return new Promise(function (resolve, rejcet) {
    setTimeout(function () {
      console.log('고민 끝!')
      product = '제로 콜라'
      price = 3000
      if (price <= 2000) {
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
