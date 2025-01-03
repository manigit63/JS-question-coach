// 46- Right Triangle - Star
// 	*         //  1
// 	* *       //
// 	* * *     //
// 	* * * *   //
// 	* * * * * //

// outer loop represent : row
//  inner loop represent : column

// for (let j =1 ; j<=5;j++){
//     let pattern =""
//     for (let i=1; i<=j;i++){
//         pattern += '*'+ " "
//     }

// console.log(pattern)
// }

for (let j = 1; j <= 5; j++) {
  let pattern = "";
  for (let i = 1; i <= j; i++) {
    pattern += "*" + " ";
  }
  console.log(pattern);
}
