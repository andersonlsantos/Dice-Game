'use strict';

const sell = e => document.querySelector(`${e}`)

const sellAll = e => document.querySelectorAll(`${e}`)

const  rand = () => {
    let randi = Math.trunc(Math.random() * 6)
    let arr = []
    switch(randi){
        case 0:
            arr.push('dice-1.png', 1)
            break
        case 1:
            arr.push('dice-2.png', 2)
            break
        case 2:
            arr.push('dice-3.png', 3)
            break
        case 3:
            arr.push('dice-4.png', 4)
            break
        case 4:
            arr.push('dice-5.png', 5)
            break
        case 5:
            arr.push('dice-6.png', 6)
            break
    }
    return arr
}

sell('.btn--roll').addEventListener('click', () => {
    sell('.dice').src = `${rand()[0]}`
    console.log(rand())
})
