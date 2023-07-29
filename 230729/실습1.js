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
      resolve()
    }, 1000)
  })
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

call('kim')
  .then((resultCall) => {
    console.log(resultCall + '반가워~')
    return back()
  })
  .then(() => {
    console.log('back을 실행했구나')
    return hell()
  })
  .then(() => {
    console.log('여기는 callback hell')
  })
