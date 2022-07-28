'use strict';

const sell = e => document.querySelector(`${e}`)

const sellAll = e => document.querySelectorAll(`${e}`)

sell('.player--0').style.backgroundColor = '#ffffff66'

let control = 0
let control2 = 0
let control3 = 0
let add = 0
let add2 = 0

const  rand = () => {
    let randi = Math.trunc(Math.random() * 6)
    let arr = ''
    let cont
    let list
    if(randi === 0) arr = 'dice-1.png'
    if(randi === 1) arr = 'dice-2.png'
    if(randi === 2) arr = 'dice-3.png'
    if(randi === 3) arr = 'dice-4.png'
    if(randi === 4) arr = 'dice-5.png'
    if(randi === 5) arr = 'dice-6.png'
    
    if(randi === 0){
        add = 0
    }else{
        add += (randi + 1)
    }

    if(arr === 'dice-1.png') control++
    function controll(a, b) {
        sell(a).style.backgroundColor = '#ffffff66'
        sell(b).style.backgroundColor = ''
    }
    if(control === 0){
        sell('#current--0').textContent = `${add}`
        sell('#current--1').textContent = '0'
        cont = 0
    }
    if(control === 1) {
        controll('.player--1', '.player--0')
        sell('#current--1').textContent = `${add}`
        sell('#current--0').textContent = '0'
        cont = 1
    }
    if(control === 2) {
        controll('.player--0', '.player--1')
        control = 0
    }

    list = [arr, cont]
    
    return list
}

sell('.btn--roll').addEventListener('click', () => {
    sell('.dice').src = `${rand()[0]}`
})

sell('.btn--hold').addEventListener('click', () => {
    let current0 = Number(sell('#current--0').textContent)
    let current1 = Number(sell('#current--1').textContent)
    control2 += current0
    control3 += current1
    add2++
    if(rand()[1] === 0){
        sell('.test').textContent = 0
    }
    if(rand()[1] === 1){
        sell('.test').textContent = 1
    }
    sell('#score--0').textContent = control2
    sell('#score--1').textContent = control3
})
