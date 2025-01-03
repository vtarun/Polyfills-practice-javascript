// Adding a custom filter method to the Array prototype
Array.prototype.customFilter = function(cb) {
    // Check if the array is null or undefined
    if (this === null || this === undefined) {
        throw new TypeError('Cannot read property of null or undefined.');
    }

    // Check if the callback is a function
    if (typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function.`);
    }

    // Initialize an empty array to store the filtered results
    const result = [];
    
    this.forEach((item, index, array) => {
        // If the callback returns true, push the element to the result array
        if (cb(item, index, array)) {
            result.push(item);
        }
    });
    
    // Return the filtered results
    return result;
}

// Example usage of the customFilter method
const arr = [1, 2, 3];
arr.customFilter((item, idx, arr) => item > 2); // [3]