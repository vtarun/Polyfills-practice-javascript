Array.prototype.customReverse = function() {
    if(this === null || this === undefined){
        throw new TypeError('Array.prototype.customReverse called on null or undefined');
    }
    
    const array = Object(this);
    const length = array.length >>> 0;

    for(let i=0;i<Math.floor(length/2);i++){
        const temp = this[i];
        this[i] = this[length -1-i];
        this[length -1-i] = temp;
    }

    return this;
}