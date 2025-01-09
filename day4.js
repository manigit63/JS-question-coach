// 54- Accept size n from user and create a n size array then take n inputs into the and finally
//       Print the sum & Avg of all elements.

// let n =prompt("enter sixe of an array: ")

// let n = parseInt(prompt("enter size:"));
// let arr = [];
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   let value = parseFloat(prompt("enter value : "));
//   arr.push(value);

//   sum += value;
// }
// console.log(arr);
// console.log(sum);
// console.log(`avg: ${sum / n}`);

// 55- Find the greatest element.
//       [2, 96, 69, 77, 145, 20] = Max element = 145 found at 4 index

// let arr =  [2, 96, 69, 77, 145, 20]
// let max = 0  // 0,1,4
// for (let i =0; i<=arr.length; i++){
//   if(arr[i]>arr[max]) max = i
// }
// console.log(`max value ${arr[max]} nad index is ${max}`)

// 56- Find the second greatest element
//       {2, 96, 69, 77, 145, 20} = Second greatest element = 96

// let arr =  [2, 96, 69, 77, 145, 145, 20]
// let max = 0  // 0,1,4
// let second_max = 0
// for (let i =0; i<=arr.length; i++){
//   if(arr[i]>arr[max]) max = i

// }
// for (let i =0; i<=arr.length; i++){
//   if(i != max && arr[i]>arr[second_max]) second_max = i

// }
// console.log(`max value ${arr[max]} nad index is ${max}`)
// console.log(`max value ${arr[second_max]} nad index is ${second_max}`)

// 57- Check if array is sorted in increasing order or not.
//        Ex 1 - { 1, 5, 8,  9, 10, 15 } - OP = "YES"
//        Ex 2 - { 1, 8, 6, 9, 10, 15 } - OP = "NO"

// arr = [1, 6, 8, 9, 10, 15];
// let flag
// for(let i =0;i<=arr.length;i++){
//   if(arr[i]>arr[i+1]){
//     console.log("no")
//     flag = false
//     break;
//   }
//   flag = true;
// }
// if (flag==true) console.log("yes")

// 58- Take n integer inputs from user and store them in an array.
//        Now, copy all the elements in an another array but in reverse order and print it.

// let arr1 = [1,2,3,4,5]
// let arr2 = [];

// for(i = arr1.length - 1; i>=0; i--){
//   arr2.push(arr1[i])
// }

// console.log(arr2)

// 59- Array left Rotation by 1

// function leftRotation(arr){
//   if(arr.length == 0 ) return arr;
//   let firstElement = arr[0];

//   for(i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1]
//   }
//   arr[arr.length-1] = firstElement
//   return arr
// }

// let result = leftRotation([1,2,3,4,5])
// console.log(result)

// 60- Array left rotation by K elements

// function leftRotateByK(arr, k) {
//   if (arr.length === 0) return arr; // Handle edge case for empty array
//   k = k % arr.length; // Normalize k if it exceeds the array length

//   for (let i = 0; i < k; i++) {
//     let firstElement = arr[0]; // Store the first element
//     for (let j = 0; j < arr.length - 1; j++) {
//       arr[j] = arr[j + 1]; // Shift elements to the left
//     }
//     arr[arr.length - 1] = firstElement; // Place the first element at the end
//   }
//   return arr;
// }

// // Example usage:
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// arr = leftRotateByK(arr, k);
// console.log(arr); // Output: [3, 4, 5, 1, 2]

// 55- Find the greatest element.
//       {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index
// 56- Find the second greatest element
//       {2, 96, 69, 77, 145, 20} = Second greatest element = 96

// let arr = [2, 86, 69, 77, 145];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[max]) max = i;
// }

// console.log("first max number in array", arr[max]);
// let second_max = 0;
// for (let i = 0; i <= arr.length; i++) {
//   if (i != max && arr[i] > arr[second_max]) second_max = i;
// }
// console.log("second max number in array", arr[second_max]);

// 57- Check if array is sorted in increasing order or not.
//        Ex 1 - { 1, 5, 8,  9, 10, 15 } - OP = "YES"
//        Ex 2 - { 1, 8, 6, 9, 10, 15 } - OP = "NO"

// let arr = [1, 5,8, 9, 10, 15];
// let flag = true
// for (let i = 0 ; i< arr.length - 1; i++){
//   if(arr[i]>arr[i+1]) flag =false;
// }

// console.log(flag? "yes": "no")

// 58- Take n integer inputs from user and store them in an array.
//  Now, copy all the elements in an another array but in reverse order and print it

// let arr = [1,2,3,4,5] ;
// let brr = [];
// for(let i = 0; i<arr.length ; i++)

// 63- Binary Search. If element found print the index else -1

// function binarySearch(arr,target){
//   let low = 0;
//   let high = arr.length - 1;    //6

//   while(low <= high){               //4 <= 6  // 4 <= 4
//     let mid = Math.floor((low+high)/2)  //3 >> 8  // 5 >> 12  // 4 >> 10

//     if(arr[mid] == target){
//       return mid; // Element found, return the index >> 4 ans.
//     } else if(arr[mid] < target){
//       low = mid+1;                    // low = 4
//     }else{
//       high = mid -1                  // high = 4
//     }
//   }
//   return -1
// }

// // Example usage:
// let arr = [2, 4, 6, 8, 10, 12, 14];
// let target = 10;

// let result = binarySearch(arr, target);
// console.log(result); // Output: 4 (Index of the element 10)

// // If the target is not in the array:
// target = 15;
// result = binarySearch(arr, target);
// console.log(result); // Output: -1

// binary algo >>

// 1. array sorted
// 2. while(low<=high)
// 3. low,hugh >> mid
// 4. mid == target    return
// 5. mid < target   >> low = mid +1
// 6 mid > target   >> high = mid -1

// 64- Bubble Sort.
// function
// algo >> length
// do{}while >> control the pass
// flag = false
// for loop >> swap control  +  flag == true
// n--
// while(flag)
// return
// let a = [];
// function bubble_sort(arr) {
//   let n = arr.length;
//   let swap;
//   do {
//     let swap = false;
//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swap = true;
//       }
//     } // last biggest element
//     n--;
//   } while (swap);
//   // const a = arr.split(",");
//   return arr;
// }

// console.log(`bubble sort[ ${bubble_sort("64,34,25,12,22,11,90")} ]`);


