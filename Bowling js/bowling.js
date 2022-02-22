const rolls = [10, 2, 8, 5, 5, 4, 2, 3, 4, 9, 0, 0, 10, 2, 8, 4, 3, 10, 5, 2]


const frame = {
    1: [10, 2, 8],
    2: [2, 8, 5],
    3: [5, 5, 4],
    4: [4, 2],
    5: [3, 4],
    6: [9, 0],
    7: [0, 10, 2,],//if first bowl falls 0 and second 10 then only one of next will be count
    8: [2, 8, 4],
    9: [4, 3],
    10: [10, 5, 2]//if in the last round u get 10 then 2 more bowl will be given
}

function game(rolls) {

    let score = 0;
    let rollsIndex = 0;


    for (let frameIndex = 1; frameIndex <= 10; frameIndex++) {
        //strike
        if (rolls[rollsIndex] === 10) {
            score = score +10+ rolls[rollsIndex + 1] + rolls[rollsIndex + 2];
            rollsIndex++
        } else {
            let frameScore = rolls[rollsIndex] + rolls[rollsIndex + 1]
            if (frameScore === 10) {
                //spare
                score += 10 + rolls[rollsIndex + 2]
            } else {
                //normal
                score += frameScore
            }
            rollsIndex += 2;
        }
    }
    return score;
}

console.log(game(rolls))