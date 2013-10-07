//** sample syntax */

// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

describe("splice", function() {
  it("should remove elements from an array", function() {
    expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);
  });

  it("should not change the array", function() {
    var a = ['a','b','c','d','e'];
    splice(a, 2, 2);
    expect(a).toEqual(['a','b','c','d','e']);
  });

  it("should replace the first and second elements with a new element", function() {
    expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e']);
  });

  it("should insert a new elements", function() {
    expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
  });

  it("should insert a value at the end when the start index is greater than the length of the array", function() {
    expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
  });

  it("should insert a value at the end when the start index is greater than the length of the array", function() {
    expect(splice(['a','b','c'], 99, 1, 'z')).toEqual(['a','b','c','z']);
  });

  it("should allows the insertion of N number of elements", function() {
    expect(splice(['a','b','c'], 99, 1, 'x','y','z')).toEqual(['a','b','c','x','y','z']);
  });

});