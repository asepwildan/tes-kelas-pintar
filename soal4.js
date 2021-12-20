function findMin(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }

    for (let k = 0; k < array.length; k++) {
        if (array[k] + 1 !== array[k + 1]) {
            return array[k] + 1;
        }
    }

    return array;
}

console.log(findMin([3, 5, 1, 2, 4, 9]));
