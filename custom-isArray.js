Array.prototype.customIsArray = function(arr){
    if(typeof arr === 'object' && arr instanceof Array){
        return true;
    }    
    return false;
}