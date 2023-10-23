function print(a: number, b: number, c = 5) {
  console.log(a, b, c)
}

print(1, 2, 3)

function concatStr(a: string, b: string): string {
  return a + b
}

console.log(concatStr('czds', 'csad'))

function goingOn(a: number): never {
  while (true) {
    console.log('go')
  }
}

function sum1(a: number, b: number) {
  console.log('sum1:', a + b)
}

function sum2(...a: number[]) {
  let tmp = 0
  a.map((element) => {
    tmp = tmp + element
  })
  return tmp
}

sum1(1, 15)
console.log('sum2:', sum2(1, 2, 3, 4, 10))

interface Greet {
  name: string
  hi(): string
  bye(a: number): string
}

const heesung: Greet = {
  name: 'heesung',
  hi() {
    return 'ㅎㅇㅎㅇ 나는' + this.name
  },
  bye(a: number) {
    for (let i = 0; i < a; i++) {
      console.log('잘가잘가')
    }
    return a + '번 인사하기'
  },
}

console.log(heesung.hi())
console.log(heesung.bye(3))

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any) {
  return a + b
}

interface Add {
  (a: number, b: number): number
}

interface Toy {
  name: string
  start(): void
}

interface Car {
  name: string
  color: string
  price: number
}

const toyCar: Toy & Car = {
  name: '타요',
  start() {
    console.log('타요버스 부르르릉')
  },
  color: 'blue',
  price: 100000000,
}

toyCar.start()

function array(arr: any[]): number {
  return arr.length
}

function getG<T>(val: T): T {
  return val
}

function arrayG<T>(arr: T[]): number {
  return arr.length
}

console.log(getG<String>('야야야!!'))
console.log(arrayG<String>(['1', '20']))

function arrElement<T>(arr: T[], idx: number) {
  return arr[idx] ? arr[idx] : false
}

console.log(arrElement<string>(['a'], 1))
console.log(arrElement<string>(['a'], 0))
