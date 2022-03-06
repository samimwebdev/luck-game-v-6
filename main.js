;(function () {
  //selector
  const formElm = document.querySelector('form')
  const userINputElm = document.getElementById('luck-input')
  const luckyNumberElm = document.querySelector('.lucky-number span')
  const p1BtnElm = document.querySelector('.p1Btn')
  const p2BtnElm = document.querySelector('.p2Btn')
  const p1InputElm = document.querySelector('.p1')
  const p2InputElm = document.querySelector('.p2')
  const winnerElm = document.querySelector('.winner')
  const resetBtnElm = document.querySelector('#resetBtn')

  let luckNumber
  let p1Value
  let p2Value
  let p1Turn
  let p2Turn
  let gameOver

  function randNum(num = 0) {
    //0-0.99(not including 1)
    return Math.floor(Math.random() * num) + 1
  }

  function initialState() {
    luckNumber = randNum(10)
    p1Value = 0
    p2Value = 0
    p1Turn = true
    p2Turn = true
    gameOver = false
  }

  function initialView() {
    //showing into DOM
    luckyNumberElm.textContent = luckNumber
    p1InputElm.textContent = 0
    p2InputElm.textContent = 0
    p1BtnElm.removeAttribute('disabled')
    p2BtnElm.removeAttribute('disabled')
  }

  initialState()
  initialView()

  function winnerState(player) {
    gameOver = true
    //p1 is winner
    winnerElm.textContent = `${player} is winner`
    //disabling p1Btn player
    p2BtnElm.setAttribute('disabled', 'disabled')
    //disabling p2Btn player
    p1BtnElm.setAttribute('disabled', 'disabled')
  }

  formElm.addEventListener('submit', function (evt) {
    evt.preventDefault()
    //receiving the input
    luckNumber = parseInt(userINputElm.value)
    //insert into luckyNumber Element
    luckyNumberElm.textContent = luckNumber
    //reset the input
    userINputElm.value = ''
  })

  p1BtnElm.addEventListener('click', function (evt) {
    if (p1Turn && luckNumber !== p1Value && luckNumber !== p2Value) {
      //Increment the  p1 value
      // p1Value++

      p1Value += randNum()
      //inserting into DOM
      p1InputElm.textContent = p1Value
      //switch off p1turn and start p2turn
      p1Turn = false
      p2Turn = true
      //show visual marker

      p1BtnElm.setAttribute('disabled', 'disabled')

      p2BtnElm.removeAttribute('disabled')
    }

    if (p1Value === luckNumber) {
      winnerState('p1')
    }
  })

  p2BtnElm.addEventListener('click', function (evt) {
    if (p2Turn && luckNumber !== p1Value && luckNumber !== p2Value) {
      //Increment the  p1 value
      // p2Value++
      p2Value += randNum()
      //inserting into DOM
      p2InputElm.textContent = p2Value
      //switch off p2turn and start p1turn
      p2Turn = false
      p1Turn = true
      //show visual marker
      p2BtnElm.setAttribute('disabled', 'disabled')
      p1BtnElm.removeAttribute('disabled')
    }

    if (p2Value === luckNumber) {
      winnerState('p2')
    }
  })

  resetBtnElm.addEventListener('click', function (evt) {
    initialState()
    initialView()
  })
})()
