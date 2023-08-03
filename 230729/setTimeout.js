// console.log(1)

// setTimeout(function () {
//   console.log(2)
// }, 2000)

// console.log(3)

function printLog() {
  console.log(3)
}

console.log(1)

function test(param, callbackFunction) {
  setTimeout(function () {
    console.log(2)
    callbackFunction()
  }, 2000)
}

test(2, printLog)
