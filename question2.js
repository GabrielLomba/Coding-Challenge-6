function question2(array, target) {
    const numberMap = new Map();

    for(number of array) {
        if(numberMap.get(target - number)) return [target - number, number];

        numberMap.set(number, true);
    }

    return [];
}

input = [
    17, 29,	29,	70,	94,
    30,	48,	70,	75,	17,
    77,	62,	96,	43,	24,
    69,	2,	6,	4,	60,
    8,	94,	1,	79,	24,
    91,	25,	82,	7,	34,
    42,	56,	92,	19,	70,
    92,	66,	97,	18,	53,
    15,	31,	56,	41,	50,
    5,	4,	42,	64,	25,
    40,	64,	86,	65,	88,
    34,	99,	75,	6,	44,
    53,	89,	77,	60,	10,
    27,	3,	85,	99,	23,
    47,	29,	65,	5,	76,
    48,	22,	32,	39,	8,
    35,	48,	56,	16,	5,
    37,	64,	32,	41,	15,
    19,	39,	69,	64,	83,
    59,	1,	64,	1,	69];
sum = 182;
question2(input, sum);
