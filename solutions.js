// Task1
// https://jasonjafari.notion.site/Frequency-Counter-eecdaa7e0ca84a96af0ec278719f07f6
export function areTowValuesAnagram(s1, s2) {
  
  // time  O(n)
  // space O(n)

  if (s1.length !== s2.length) {
    return "Not Anagram"; }
  

    const countera = {};
    const counterb = {};

    for (let char of s1) {

      countera[char] = (countera[char] || 0 ) + 1;

    }

    for (let char of s2) {

      counterb[char] = (counterb[char] || 0 ) + 1;

    }  


    for (let key in countera) {

      if (!(key in counterb) || countera[key] !== counterb[key]) {

        return "Not Anagram";
      }


    } 
    
    return "Anagram"

}

// Task2
// https://jasonjafari.notion.site/Multiple-Pointes-Contains-Duplicate-1acceaddc37746acaf69ae7d84de42ed
export function containsDuplicate(nums) {
  
  // time O(n^2)
  // space O(1)
  
    let i = 0;
    while (i < nums.length - 1) {
      let j = i + 1;
      while (j < nums.length) {
        if (nums[i] === nums[j]) {
          return true;
        }
        j++;
      }
      i++;
    }
    return false;
  
  

}

// Task3
// https://jasonjafari.notion.site/Sliding-Window-maxSubarraySum-b400bee7645a4a48b22d29a848dc5f68
export function maxSubarraySum(arr, num) {
 
  // time O(n)
  // space: O(1) + O(1) + O(n) = O(n)


 

    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;


}



