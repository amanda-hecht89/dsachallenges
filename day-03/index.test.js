const { BinaryTreeNode } = require('./index');
const { PersonTreeNode } = require('./personIndex');

describe('node based data structures', () => {
  it.skip('add to bianary node', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');
    B.addBinTree(A);
    B.addBinTree(D);
    B.addBinTree(C);
    expect(B.right).toEqual({ 'addBinTree': 
    expect.any(Function), 'data': 'D', 'left': 
    { 'addBinTree': expect.any(Function), 
      'data': 'C', 'left': null, 'right': null }, 'right': null });
  });

  it('find a person in the bianary node', () => {
    const sam = new PersonTreeNode('Sam');
    const o = new PersonTreeNode(0);
    const dean = new PersonTreeNode('Dean');
    const bobby = new PersonTreeNode('Bobby');

    sam.addPeopleTree(o);
    sam.addPeopleTree(bobby);
    sam.addPeopleTree(dean);

    expect(sam.findPerson('Sam')).toEqual({
      'addPeopleTree': expect.any(Function), 
      'findPerson': expect.any(Function),
      data: 'Sam',
      'left': expect.any(Object),
      'right': expect.any(Object)
    });
    expect(sam.findPerson('Castiel')).toEqual(null);
  });
});
