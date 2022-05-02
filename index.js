// code your solution here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

const mondayWork = function(act='go to the office'){
    return `This Monday, I will ${act}.`
}

const wrapAdjective = function(flair='*'){
    return function(worth = "special"){
        return `You are ${flair}${worth}${flair}!`
    }
}