function substituiPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Esse número já é 0");
        } else if (array[i] % 2 === 0) {
            console.log("Substituindo o valor " + array[i] + " por 0");
            array[i] = 0;
        }
    }
    return array;
}

let array = [1,5,8,10,13,42,45];
console.log(substituiPares(array));