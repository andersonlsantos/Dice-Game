'use strict';

const sell = e => document.querySelector(`${e}`)

const sellAll = e => document.querySelectorAll(`${e}`)

sell('.player--0').style.backgroundColor = '#ffffff66'

let control = 0

let add = 0

const  rand = () => {
    let randi = Math.trunc(Math.random() * 6)
    let arr = ''
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
    }
    if(control === 1) {
        controll('.player--1', '.player--0')
        sell('#current--1').textContent = `${add}`
        sell('#current--0').textContent = '0'
    }
    if(control === 2) {
        controll('.player--0', '.player--1')
        control = 0
    }
    
    return [arr, randi]
}

sell('.btn--roll').addEventListener('click', () => {
    sell('.dice').src = `${rand()[0]}`
})

sell('.btn--hold').addEventListener('click', function() {
    alert(rand()[0])
})
