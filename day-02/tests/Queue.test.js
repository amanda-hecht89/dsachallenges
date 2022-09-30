const { Queue } = require('../Queue.js');

describe('Queue', () => {
  it('should add item wuth queue.enqueue', () => {
    const queue = new Queue();
    queue.enqueue('amanda');
    expect(queue.hasNext()).toEqual(true);
  });

  it('should remove first item with queue.dequeue', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  });
});
