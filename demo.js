import PRNG from './prng.js'
import Hash from './hash.js'
import Random from './random.js'

let splitMix = PRNG.splitMix32(5)
let cybr53Seed = Hash.cyrb53('TEST')
let simple = PRNG.simple(cybr53Seed)
const ran = new Random(simple)

let randomI32FromRange = ran.fromRange(0, 5).asi32()
let rabdinF32FromRange = ran.fromRange(0, 5).asf32()
let randomF32 = ran.f32(10)
let randomI32 = ran.i32(10)
let randomIndex = ran.index([0.1, 0.2, 0.3, 0.4])
let randomArrayShuffle = ran.shuffleArray([1, 2, 3, 4, 5])
