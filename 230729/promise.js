// function promise1(flag) {
//   return new Promise(function (ok, err) {
//     if (flag) {
//       ok('정상적입니다.')
//     } else {
//       err('에러입니다.')
//     }
//   })
// }

// promise1(true)
//   .then(function (result) {
//     console.log(result)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })

// promise1(false)
//   .then(function (result) {
//     console.log(result)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// function add(x, y, callback) {
//   setTimeout(function () {
//     let result = x + y
//     callback(result)
//   }, 1000)
// }

// function mul(x, callback) {
//   setTimeout(function () {
//     let result = x * 2
//     callback(result)
//   }, 1000)
// }

// function sub(x, callback) {
//   setTimeout(function () {
//     let result = x - 1
//     callback(result)
//   }, 1000)
// }

// add(4, 3, function (result1) {
//   console.log(result1)
//   mul(result1, function (result2) {
//     console.log(result2)
//     sub(result2, function (result3) {
//       console.log(result3)
//     })
//   })
// })

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function add(x, y) {
  return new Promise(function (resolve, rejcet) {
    setTimeout(function () {
      resolve(x + y)
    }, 1000)
  })
}

function mul(x, callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(x * 2)
    }, 1000)
  })
}

function sub(x, callback) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(x - 1)
    }, 1000)
  })
}

add(3, 4)
  .then((addResult) => {
    console.log(addResult)
    return mul(addResult)
  })
  .then((mulResult) => {
    console.log(mulResult)
    return sub(mulResult)
  })
  .then((subResult) => {
    console.log(subResult)
  })
  .catch('시발머야')
