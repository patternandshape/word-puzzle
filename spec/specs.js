describe("disemvoweller", function() {
  it("takes in a string of characters and converts it to a array", function() {
    expect(disemvoweller("sample")).to.eql(['s','a','m','p','l','e']);
  });
});

describe("findVowels", function() {
  // it("finds any vowels within the array and places them in a separate array", function() {
  //   expect(findVowels("sample")).to.eql(['a','e']);
  // });

  it("finds any vowels and replaces them with a -", function() {
    expect(findVowels("sample")).to.equal('s-mpl-');
  });
});
