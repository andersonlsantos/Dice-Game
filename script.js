'use strict';

const sell = e => document.querySelector(`${e}`)

const sellAll = e => document.querySelectorAll(`${e}`)

sell('.player--0').style.backgroundColor = '#ffffff66'

let control = 0

const  rand = () => {
    let randi = Math.trunc(Math.random() * 6)
    let arr
    switch(randi){
        case 0:
            arr = 'dice-1.png'
            break
        case 1:
            arr = 'dice-2.png'
            break
        case 2:
            arr = 'dice-3.png'
            break
        case 3:
            arr = 'dice-4.png'
            break
        case 4:
            arr = 'dice-5.png'
            break
        case 5:
            arr = 'dice-6.png'
            break
    }
    if(arr === 'dice-1.png') control++
    function controll(a, b) {
        sell(a).style.backgroundColor = '#ffffff66'
        sell(b).style.backgroundColor = ''
    }
    if(control === 1) {
        controll('.player--1', '.player--0')
    }
    if(control === 2) {
        controll('.player--0', '.player--1')
        control = 0
    }
    
    return arr
}

sell('.btn--roll').addEventListener('click', () => {
    sell('.dice').src = `${rand()}`
})
