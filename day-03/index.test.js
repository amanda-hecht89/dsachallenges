const {} = require('./index');

describe('node based data structures', () => {
  it('add to bianary node', () => {
    const BinaryTreeNode = [B, A, C, D];
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');
    expect(B).add(A);
    expect(B).add(D);
    expect(B).add(C);
    
  });
});
