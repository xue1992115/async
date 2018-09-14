/**
 *async函数返回的是一个Promise对象,Promise { 'hello async' }
 */
// async function testAsync() {
//   return 'hello async'
// }

// const result = testAsync().then(v => {
//   console.log(v)
// })
// console.log(result)
// console.log('123')

/**
 * await函数，用于等待一个返回值，可以是asynch函数返回的Promise的对象，也可以是普通函数的返回值
 * 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。
 * 如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。
 */
// function getSomething() {
//   return 'something'
// }
// async function testAsync2() {
//   return Promise.resolve('hello async')
// }
// async function test() {
//   const v1 = getSomething()
//   const v2 = testAsync2()
//   console.log(v1, v2)
//   console.log('1234')
// }

// test()

function takeLongTime(n) {
  return new Promise(resolve => {
    setTimeout(() => resolve(n + 200), n)
  })
}

function step1(n) {
  console.log(`step1 with ${n}`)
  return takeLongTime(n)
}

function step2(n) {
  console.log(`step2 with ${n}`)
  return takeLongTime(n)
}

function step3(n) {
  console.log(`step3 with ${n}`)
  return takeLongTime(n)
}
// Promise 方式来实现这三个步骤的处理
// function doIt() {
//   console.time('doIt')
//   const time1 = 300
//   step1(time1)
//     .then(time2 => step2(time2))
//     .then(time3 => step3(time3))
//     .then(result => {
//       console.log(`result is ${result}`)
//       console.timeEnd('doIt')
//     })
// }

// doIt()

//async/await 来实现
async function doIt() {
  console.time('doIt')
  const time1 = 300
  const time2 = await step1(time1)
  const time3 = await step2(time2)
  const result = await step3(time3)
  console.log(`result is ${result}`)
  console.timeEnd('doIt')
}

doIt()
