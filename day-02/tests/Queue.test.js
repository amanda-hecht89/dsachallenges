const { Queue } = require('../Queue.js');

describe('Queue', () => {
  it.skip('should add item to the array', () => {
    const newItemArray = new Queue([]);
    newItemArray.classPush('fox');
    newItemArray.classPush('goose');
    newItemArray.classPush('lizard');
    expect(newItemArray.list).toEqual(['fox', 'goose', 'lizard']);
  });
});
