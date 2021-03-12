function reverseArray(myArray) {
    console.log(`input array: ${myArray}`);
    var left = 0;
    var right = myArray.length - 1
    while (left < right) {
      temp = myArray[left];
      myArray[left] = myArray[right];
      myArray[right] = temp;
      left++;
      right--;
    }
    console.log(`array after in-place swaps: ${myArray}`); // 
  }

// When you're ready to test your code, uncomment the below and run:
/* 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
*/