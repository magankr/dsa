/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // console.log('function started')
    const result = [];
    nums.forEach((a, index)=>{
        nums.forEach((b, index1)=>{
            if(target === a + b && index !== index1){
                if(!result.includes(index))
                    result.push(index);
                if(!result.includes(index1))
                    result.push(index1)
                
                console.log('my result', result)
                return result;
            }
        })
    })
    return result;
};

console.log(twoSum([2,7,11,15], 9));

