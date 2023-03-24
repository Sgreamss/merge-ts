function merge(collection1:number[],collection2:number[]):number[]{
    let collection3 : number[] = [];
    
    let i = 0;
    let j = 0;
    while(i<collection1.length && j<collection2.length){
        if(collection1[i]<collection2[j]){
            collection3.push(collection1[i]);
            i++;

        }
        else {
            collection3.push(collection2[j]);
            j++;
        }
    }
    while(i<collection1.length){
        collection3.push(collection1[i]);
        i++;
    }
    while(j<collection2.length){
        collection3.push(collection2[j]);
        j++;
    }

    return collection3;
}
const result = merge([1,5,6],[2,3,4]);
console.log(result);