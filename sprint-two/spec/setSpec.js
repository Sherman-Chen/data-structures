describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", "peek", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should allow you to view an individual item or else the entire set', function() {
    set.add('Mel Gibson');
    set.add('Steven Siegal');
    expect(set.peek('Mel Gibson')).to.equal('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.peek('Mel Gibson')).to.equal('Mel Gibson is not in set!');
  });

  it('should handle for input objects of any type', function() {
    set.add([1, 2, 3]);
    set.add({a: 1, b: 2});
    expect(set._length()).to.equal(2);
    expect(set.contains("[1,2,3]")).to.equal(true);
  });

});
