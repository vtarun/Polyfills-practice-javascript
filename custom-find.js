Array.prototype.customFind = function(callback, thisArg) {

    // Check if array is null or undefined
    if(this === null || this === undefined) {
        return new TypeError('Array.prototype.customFind called on null or undefined');
    }

    // Check if callback is a function
    if(typeof callback !== 'function') {
        return new TypeError(callback + ' is not a function');
    }

    const array = Object(this); // Convert object to array
    const len = array.length;
   // Iterate over the array 
   for(let i = 0; i< len; i++){
    // Check if current element exists in the array
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