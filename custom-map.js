// Adding a custom map method to Array prototype
Array.prototype.customMap = function(cb){
    // Check if the array is null or undefined
    if(this === null || this === undefined){
        throw new TypeError('Array.prototype.customMap called on null or undefined');
    }

    // Check if callback is a function
    if(typeof cb !== 'function'){
        throw new TypeError(`${cb} is not a function`);
    }
    // Initialize an empty array to store the results
    const result = [];
    // Iterate over each element in the array
    this.forEach((item, index, array) => {
        // Apply the callback to each elemnt and push the result into result array
        result.push(cb(item, index, array))
    });

    // Return the mapped results
    return result;
}