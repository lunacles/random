const Random = class {
  constructor(prng = () => Math.random()) {
    if (typeof prng !== 'function') throw new Error('Invalid PRNG')
    this.prng = prng
    this.type = null

    this.result = 0
  }
  asi32() {
    return this.result
  }
  asf32() {
    return this.result | 0
  }
  fromRange(min, max) {
    this.result = this.prng() * (max - min) + min
    return this
  }
  f32(n = 1.0) {
    return n * this.prng()
  }
  i32(i = 1) {
    return (this.prng() * Math.floor(i)) | 0
  }
  chance(probability) {
    return this.prng() < probability
  }
  fromArray(array) {
    return array[this.i32(array.length)]
  }
  fromObject(object) {
    let values = Object.values(object)
    return this.fromArray(values)
  }
  index(probabilities = []) {
    let totalProbability = probabilities.reduce((a, b) => a + b, 0)
    let chance = this.f32(totalProbability)
    for (let [i, probability] of probabilities.entries()) {
      if (chance < probability) return i
      chance -= probability
    }
  }
  shuffleArray(array) {
    return array.slice().sort(() => 0.5 - this.f32())
  }
}

export default Random
