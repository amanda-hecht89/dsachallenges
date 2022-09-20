const { reverseSentence, addPunctuation, titleCaseWord, oddOrEven } = require('./index');

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
      expect(at(arr, 2)).toEqual(7);
      expect(at(arr, -1)).toEqual(8)
    });





  });
});
