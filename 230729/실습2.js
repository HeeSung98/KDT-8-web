excute()

function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name)
      resolve(name)
    }, 1000)
  })
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('back')
      resolve('back')
    }, 1000)
  })
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('callback hell')
    }, 1000)
  })
}
async function excute() {
  let resultCall = await call('kim')
  console.log('반가워' + resultCall)
  let resultBack = await back(resultCall)
  console.log(resultBack + '를 실행했구나?')
  let resultHell = await hell(resultBack)
  console.log('여기는' + resultHell)
}
