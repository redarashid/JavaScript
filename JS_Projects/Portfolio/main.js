

// function bruteForce(nums) {

//     let maxSum = nums[0];
//     for (let L=0; L < nums.length; L++) {
//         let curSum = 0;
//         for (let j=0; j < nums.length; j++ ) {
//             curSum += nums[j];
//             maxSum = Math.max(maxSum, curSum);
//         }
//         return maxSum;
//     }
// };

// function kandes(nums) {
//     let maxSum = nums[0];
//     let curSum = 0;

//     for (let n of nums) {
//         curSum = Math.max(curSum, 0);
//         curSum += n;
//         maxSum = Math.max(maxSum, curSum);
//     }
//     return maxSum;
// }

// function slidingWindow(nums) {
//     let maxSum = nums[0];
//     let curSum = 0;
//     let maxL = 0; maxj = 0;
//     let L = 0;

//     for (let j=0; j < nums.length; j++) {
//         if (curSum < 0) {
//             curSum = 0;
//             L = j;
//         }

//         curSum += nums[j];
//         if (curSum > maxSum) {
//             curSum = maxSum;
//             maxL = L;
//             maxj = j;
//         }
//     }
//     return [maxL, maxj];
// }


function sumtion(nums) {
    let maxSum = nums[0];
    
    for (let i=0; i < nums.length; i++) {
        let  curSum = 0;

        for (let j=0; j < nums.length; j++) {
            curSum += nums[j];
            maxSum = Math.max(curSum, maxSum)
        }
        return maxSum;
    }

}

function positive(nums) {
    let maxSum = nums[0];
    let curSum = 0;

    for (let n in nums) {
        maxSum = Math.max(curSum, 0);
        curSum += n;
        maxSum = Math.max(curSum, maxSum)
    }
    return maxSum;
}

function rightLeft(nums) {
    let maxSum = nums[0]
    let curSum = 0;
    let maxL = 0, maxR = 0;
    let L = 0;

    for (let R = 0; R < nums.length; R++) {

        if (curSum < 0) {
            curSum = 0;
            L = R;
        }
        curSum += nums[R];
        if (curSum > maxSum) {
            curSum = maxSum;
            maxL = L;
            maxR = R;
        }
    }
    return [maxL, maxR];
}