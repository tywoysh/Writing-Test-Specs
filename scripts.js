// Multiplication

const multiplication = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return NaN;
    }
    return num1 * num2;
}


// ConcatOdds

const concatOdds = (arr1, arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [];
    }

    if(!arr1.every(input => typeof input === 'number') || !arr2.every(input => typeof input === 'number')) {
        return [];
    }

    const concatArray = arr1.concat(arr2).sort((a,b) => a - b);
    const oddArray = [];

    for (let i = 0; i < concatArray.length; i++) {
        if ((concatArray[i] % 2) === 1 || (concatArray[i] % 2) === -1) {
            oddArray.push(concatArray[i])
        }    
    }


    const oddArrayNoDuplicates = [];
    for (let elem of oddArray) {
        if (!oddArrayNoDuplicates.includes(elem)) {
            oddArrayNoDuplicates.push(elem);
        }
    }

    return oddArrayNoDuplicates;

}
console.log(concatOdds([3,2,1], [9,1,1,1,4,15,-1]));


// Shopping Cart

class ShoppingCart {
    constructor(loggedIn) {
        this.cart = [];
        this.loggedIn = loggedIn;
    }

    addToCart(item) {
        const name = item.name;
        name in this.cart ? this.cart[item].quantity++ : this.cart[item].quantity = 1;
    }
}

console.log(ShoppingCart.addToCart(pencil));

module.exports = {multiplication, concatOdds, ShoppingCart};