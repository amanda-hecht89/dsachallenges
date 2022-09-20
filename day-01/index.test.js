const { reverseSentence, addPunctuation, titleCaseWord, oddOrEven, arrayAt, anagrams, fizzBuzz, multiple } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });


    it('should add puncuation to end of the sentence', () => {
      const addExcitment = addPunctuation('!!!');
      const addQuery = addPunctuation('???');
      const awesome = addExcitment('Amanda Rocks');
      expect(awesome).toEqual('Amanda Rocks!!!');
      expect(addQuery('What did you say')).toEqual('What did you say???');
    });


    it('should title case words', () => {
      expect(titleCaseWord('amANda iS amaZing')).toEqual('Amanda Is Amazing');
    });


    it('should determine even or odd', () => {
      expect(oddOrEven(40)).toEqual('even');
      expect(oddOrEven(41)).toBe('odd');
    });

    it('should find array.at', () => {
      const arr = [5, 6, 7, 8];
      expect(arrayAt(arr, 2)).toEqual(7);
      expect(arrayAt(arr, -1)).toEqual(8);
    });

    it('should return true false for anagram', () => {
      const first = 'debit card';
      const second = 'bad credit';
      const third = 'banana';
      const fourth = 'amanda';

      expect(anagrams(first, second)).toEqual(true);
      expect(anagrams(third, fourth)).toEqual(false);
    });

    it('should replace certain numbers with the words fizz and buzz in an array', () => {
      const fizzBuzzArray = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 
        11, 'fizz', 13, 14, 'fizzBuzz'];
      expect(fizzBuzz(15)).toEqual(fizzBuzzArray);
    });

    it('should takes a number and returns an array that contains, all of the numbers from 1 to 50 that are multiples of said number', () => {
      expect(multiple(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiple(10)).toEqual([10, 20, 30, 40, 50]);
      expect(multiple(15)).toEqual([15, 30, 45]);
      expect(multiple(20)).toEqual([20, 40]);
      expect(multiple(25)).toEqual([25, 50]);
    });





  });
});
