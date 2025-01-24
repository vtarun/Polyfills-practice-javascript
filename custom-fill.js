// Adding a custom filter method to the Array prototype
Array.prototype.customFill = function(value, start=0, end=this.length) {
    // Check if the array is null or undefined
    if (this === null || this === undefined) {
        throw new TypeError('Cannot read property of null or undefined.');
    }

    const relativeStart = start >> 0;
    const relativeEnd = end >> 0;

    const array = Object(this);
    const len = array.length;

    let startIndex = Math.max(relativeStart >= 0 ? relativeStart : len + relativeStart, 0);
    let finalIndex = Math.min(relativeEnd >= 0 ? relativeEnd : len + relativeEnd, len);

    while(startIndex < finalIndex){
        array[startIndex] = value;
        startIndex++;
    }

    return array;
}

// Example usage of the customFill method
const arr = [1, 2, 3];
arr.customFill(0); // [0, 0, 0]