'use strict';

const sell = e => document.querySelector(`${e}`)

const sellAll = e => document.querySelectorAll(`${e}`)

const  rand = () => {
    let randi = Math.trunc(Math.random() * 6)
    switch(randi){
        case 0:
            return ['dice-1.png', 1]
            break
        case 1:
            return ['dice-2.png', 2]
            break
        case 2:
            return ['dice-3.png', 3]
            break
        case 3:
            return ['dice-4.png', 4]
            break
        case 4:
            return ['dice-5.png', 5]
            break
        case 5:
            return ['dice-6.png', 6]
            break
    }
}

sell('.btn--roll').addEventListener('click', () => sell('.dice').src = `${rand()[0]}`)
