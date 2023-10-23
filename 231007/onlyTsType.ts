interface Student {
  name: string
  isPassed: boolean
}

const student1: Student = {
  name: '윤희성',
  isPassed: true,
}

type Score = 'A+' | 'A' | 'B' | 'C' | 'D'
const score1: Score = 'A+'

interface 야구부 extends Student {
  position: string
  weight: number
  height: number
  [grade: number]: Score
}

const tiger: 야구부 = {
  name: 'tiger',
  isPassed: true,
  position: '투수',
  weight: 90,
  height: 180,
  1: 'A+',
  2: 'A+',
  3: 'A+',
}

console.log(tiger)

interface Game {
  title: string
  price: number
  desc?: string
  category: string
  platform: string
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런',
  category: '액션',
  platform: '모바일',
}

let heroGame_B: Game = {
  title: '마블 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
}
