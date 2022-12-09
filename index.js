function isPalindrome(word) {
  const array = word.split('');
  const revers = array.reverse()
  const reverseString  = revers.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }

}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting:true');
  console.log('=>', isPalindrome("abba"));

  console.log("Expecting:false");
  console.log('=>', isPalindrome("ab"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
