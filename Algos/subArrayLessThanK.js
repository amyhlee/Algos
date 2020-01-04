// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

function subArrayLessThanK(arr, k) {
    let left = 0
    let prod = 1
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        prod = prod * arr[i]
        while(prod >= k && left < arr.length) {
            prod = prod / arr[left]
            left++
        }
        if (left < arr.length) {
            count = count + i - left + 1
        }

    }
    return count
  };



