Array.prototype.customIndexOf = function(searchElement, fromIndex = 0) {
    // Check if the array is null or undefined
    if (this == null) {
        throw new TypeError('Array.prototype.customIndexOf called on null or undefined');
    }

    // Convert `this` to an object to handle cases where `this` might be a primitive value
    const array = Object(this);
    const len = array.length;

    // If the length of the array is 0, return -1 as the element cannot be found
    if (len === 0) {
        return -1;
    }

    // Convert `fromIndex` to an integer
    let n = fromIndex | 0;

    // If `fromIndex` is greater than or equal to the length of the array, return -1
    if (n >= len) {
        return -1;
    }

    // Calculate the starting index, handling negative `fromIndex` values
    let k = Math.max(n >= 0 ? n : len + n, 0);

    // Iterate over the array from the calculated starting index
    for (; k < len; k++) {
        // Check if the current index exists in the array and if the element at the current index matches `searchElement`
        if (k in array && array[k] === searchElement) {
            return k; // Return the index of the found element
        }
    }

    // If the element is not found, return -1
    return -1;
}

// Example usage of the customIndexOf method
const array = [5, 12, 8, 130, 44];
console.log(array.customIndexOf(12)); // 1
console.log(array.customIndexOf(130)); // 3
console.log(array.customIndexOf(7)); // -1
console.log(array.customIndexOf(8, 3)); // -1
console.log(array.customIndexOf(8, -3)); // 2