// ======================================= QUESTION 1 =======================================

input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, null, null, null, undefined, undefined, undefined, true, true, false,
    '1', '1', '3', '2', '3', { id: 5 }, { id: 15 }, { id: 5 }];

function question1(input) {
    if (!input) return [];

    const arrayMap = initializeArrayMap();
    const typesFound = new Set();

    for (element of input) {
        if (element === null) {
            typesFound.add('null');
            arrayMap.get('null').push(null);
        } else {
            typesFound.add(typeof element);
            arrayMap.get(typeof element).push(element);
        }
    }

    const result = [];

    arrayMap.forEach((value, key) => {
        const sortFunction = getSortFunctionForType(key);
        const cleanedArray = cleanArray(value, key, sortFunction);
        if(cleanedArray.length > 0) {
            if(typesFound.size > 1) {
                result.push([...cleanedArray]);
            } else {
                result.push(...cleanedArray);
                return;
            }
        }
    });

    return result;
}

function initializeArrayMap() {
    const map = new Map();
    map.set('null', []);
    map.set('undefined', []);
    map.set('boolean', []);
    map.set('number', []);
    map.set('string', []);
    map.set('object', []);
    return map;
}

function getSortFunctionForType(type) {
    if (type === 'number') {
        return (a, b) => a - b;
    } else if (type === 'object') {
        // Fast and limited copy
        return (a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b));
    } else return null;
}

function cleanArray(array, type, sortFunction) {
    const sortedArray = array.sort(sortFunction);
    if (sortedArray.length > 0 && type !== 'null' && type !== 'undefined') {
        let equalElementsStart = -1;
        for (let i = 1; i < sortedArray.length; ++i) {
            if (areEqual(sortedArray[i - 1], sortedArray[i], type)) {
                if (equalElementsStart === -1) equalElementsStart = i - 1;
            }

            if (equalElementsStart !== -1 && (!areEqual(sortedArray[i - 1], sortedArray[i], type) || i === sortedArray.length - 1)) {
                const deleteCount = i === sortedArray.length - 1 ? i - equalElementsStart + 1 : i - equalElementsStart;
                const equalElements = sortedArray.splice(equalElementsStart, deleteCount);
                sortedArray.splice(equalElementsStart, 0, equalElements);
                i = equalElementsStart;
                equalElementsStart = -1;
            }
        }
    }

    return sortedArray;
}

function areEqual(a, b, type) {
    if (type === 'object') {
        return JSON.stringify(a).localeCompare(JSON.stringify(b)) === 0;
    } else {
        return a === b;
    }
}

console.log(question1(input));
