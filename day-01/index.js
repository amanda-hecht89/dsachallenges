function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(string) {
  return function punctuate(quote) {
    return (`${quote}${string}`);
  };
}

function titleCaseWord(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function oddOrEven(number) {
  let num = 0;
  String(number).split('').map(number => num += Number(number));
  return num % 2 === 0 ? 'even' : 'odd';
}

function arrayAt(arr, i) {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}

function anagrams(str1, str2) {
  const five = str1.split('');
  const six = str2.split('');

  return five.map(Letter => six.includes(Letter)).includes(false) ? false : true;
}

function fizzBuzz(number) {
  const numArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numArr.push('fizzBuzz');
    } else if (i % 3 === 0) {
      numArr.push('fizz');
    } else if (i% 5 === 0) {
      numArr.push('buzz');
    } else numArr.push(i);

  } return numArr;
}




module.exports = { reverseSentence, addPunctuation, titleCaseWord, oddOrEven, arrayAt, anagrams, fizzBuzz };
