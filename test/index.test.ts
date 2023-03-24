import { merge } from "../src/index";

describe('merge',()=>{
    test('merge two empty arrays',()=>{
        const arr = merge([],[]);
        expect(arr).toEqual([]);
    });

    test('merge empty arrays to array',()=>{
        const arr = merge([],[1,2,3,4]);
        expect(arr).toEqual([1,2,3,4]);
    });

    test('merge two arrays with equal length and sequential value',()=>{
        const arr = merge([1,2,3],[4,5,6]);
        expect(arr).toEqual([1,2,3,4,5,6]);
    });
    
    test('merge two arrays with equal length and unsequential value',()=>{
        const arr = merge([1,3,5],[2,4,6]);
        expect(arr).toEqual([1,2,3,4,5,6]);
    });

    test('merge two arrays with unequal length and unsequential value',()=>{
        const arr = merge([1,5,6,9],[2,7]);
        expect(arr).toEqual([1,2,5,6,7,9]);
    });
});
