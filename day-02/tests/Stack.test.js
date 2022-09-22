const { Stack } = require('../Stack');

describe('Stack Tests', () => {
  it.skip('should add an item to an array', () => {
    const newItemArray = new Stack([]);
    newItemArray.classPush('fox');
    newItemArray.classPush('goose');
    newItemArray.classPush('lizard');
    expect(newItemArray.list).toEqual(['fox', 'goose', 'lizard']);
  });
});
