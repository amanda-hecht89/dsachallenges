const { reverseSentence, addPunctuation, titleCaseWord } = require('./index');

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
      const num = 0;
      expect(num % 2 === 0).toBe('even');
      expect(num % 2 === 1).toBe('odd');

    });





  });
});
