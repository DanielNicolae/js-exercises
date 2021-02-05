const removeFromArray = function(arr, ...elements) {
    let elems = elements;
    for (let i = 0; i < elems.length; i++) {
        let index = arr.indexOf(elems[i]);
        if (index !== -1) {
            arr.splice(index, 1);
        } 
    }
    
    return (arr);
}

module.exports = removeFromArray
