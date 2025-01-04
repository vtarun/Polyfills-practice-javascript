Array.prototype.customFind = function(callback, thisArg) {

    // Check if array is null or undefined
    if(this === null || this === undefined) {
        return new TypeError('Array.prototype.customFind called on null or undefined');
    }

    if(typeof callback !== 'function') {
        return new TypeError(callback + ' is not a function');
    }

    const array = Object(this);
    const len = array.length;

   for(let i = 0; i< len; i++){
    if(i in array) {
        const element = array[i];
        if(callback.call(thisArg, element, i, this)) {
            return element;
        }
    }
    
   }
   return undefined;
}

// Example usage of the customFind method
const array = [5, 12, 8, 130, 44];
const found = array.customFind(element => element > 10);
console.log(found); // 12