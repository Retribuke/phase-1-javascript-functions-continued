function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*") {
    return function bigBoy(proudDad = "special") {
            return `You are ${flair}${proudDad}${flair}!`
    }
}