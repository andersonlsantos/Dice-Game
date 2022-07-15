'use strict';

const sell = e => document.querySelector(`${e}`)

const sellAll = e => document.querySelectorAll(`${e}`)

let add = 0

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
    console.log(arr, randi + 1)
    return arr
}

sell('.btn--roll').addEventListener('click', () => {
    sell('.dice').src = `${rand()}`
})
