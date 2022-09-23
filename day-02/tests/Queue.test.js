const { Queue } = require('../Queue.js');

describe('Queue', () => {
  it('should add item wuth queue.enqueue', () => {
const queue = new Queue();
queue.enqueue('amanda');
expect(queue.hasNext()).toEqual(true);
  });
});
