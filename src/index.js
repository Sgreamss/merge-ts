function merge(collection1, collection2) {
    var collection3 = [];
    var i = 0;
    var j = 0;
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] < collection2[j]) {
            collection3.push(collection1[i]);
            i++;
        }
        else {
            collection3.push(collection2[j]);
            j++;
        }
    }
    while (i < collection1.length) {
        collection3.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        collection3.push(collection2[j]);
        j++;
    }
    return collection3;
}
var result = merge([1, 5, 6], [2, 3, 4]);
console.log(result);
