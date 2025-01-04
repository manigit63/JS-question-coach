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

// for (let j = 1; j <= 5; j++) {
//   let pattern = "";
//   for (let i = 1; i <= j; i++) {
//     pattern += "*" + " ";
//   }
//   console.log(pattern);
// }

// 47- Right Triangle - Number
// 	1
// 	1 2
// 	1 2 3
// 	1 2 3 4
// 	1 2 3 4 5

// for(let j =1; j<=5; j++){
//     let pattern = ""
//     for (let i =1 ; i<=j;i++){
//         pattern += i + ""
//     }
//     console.log(pattern)
// }

// 48- Right Triangle - Alphabet
// 	A
// 	A B
// 	A B C
// 	A B C D
// 	A B C D E

// for (let j = 1; j <= 5; j++) {
//   let pattern = "";
//   for (let i = 65; i < 65 + j; i++) {
//     pattern += String.fromCharCode(i) + " ";
//   }
//   console.log(pattern);
// }

// 49- Inverted Right Triangle
// 	* * * * *
// 	* * * *
// 	* * *
// 	* *
// 	*

// for(let j = 5;j>=1;j--){
//   let pattern=""
//   for(let i = 1; i<=j ; i++){
//     pattern += "*"
//   }
//   console.log(pattern)
// }

// 50- Mirrored Right Triangle
// 	        *
// 	      * *
// 	    * * *
// 	  * * * *
// 	* * * * *

// let n = 5
// for(let j=1;j<=n;j++){
//   let pattern = "";
//   for(let i=1;i<=n;i++){
//     if(i<=n-j) pattern += ' '
//     else pattern += "*"
//   }
//   console.log(pattern)
// }

// qus : 
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

// let n = 5;
// for(j=1;j<=5;j++){
//     pattern = "";
//     for(i=1;i<=n;i++){
//         if(i<=n-j) pattern += " ";
//         else pattern += " *"
//     }
//     console.log(pattern)
// }

// 52- V - Min Height = 3
// 		*       * 
// 		 *     *  
// 		  *   *   
// 		   * *    
// 		    * 

// let col =9
// let row = 5
// for(j=1;j<=row;j++){
//   let pattern = ""
//   for(i=1;i<=col;i++){
//     if(i == j || (i+j == 10)) pattern += "*"
//     else pattern += " "
//   }console.log(pattern);

// }


// 53- X
// *   *
//  * *
//   *
//  * *
// *   *

// let col =5
// let row = 5
// for(j=1;j<=row;j++){
//   let pattern = ""
//   for(i=1;i<=col;i++){
//     if(i == j || (i+j == 6)) pattern += "*"
//     else pattern += " "
//   }console.log(pattern);
// }