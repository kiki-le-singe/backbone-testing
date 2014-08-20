describe("Chai comparison functions", function () {
  it("checks `equal` - strict equality", function () {
    expect("foo").to.equal("foo");
    expect({foo: "bar"}).to.not.equal({foo: "bar"});
  });

  it("SHOULD: checks `equal` - strict equality", function () {
    var foo = {foo: "bar"};
    "foo".should.be.equal("foo");
    foo.should.not.be.equal({foo: "bar"});
  });

  it("checks `eql` - deep equality", function () {
    expect("foo").to.eql("foo");
    expect({foo: "bar"}).to.eql({foo: "bar"});
  });

  it("SHOULD: checks `eql` - deep equality", function () {
    var foo = {foo: "bar"};
    "foo".should.be.eql("foo");
    foo.should.be.eql({foo: "bar"});
  });

  it("checks `above` - greater than", function () {
    expect(1).to.not.be.above(1);
    expect(5).to.be.above(2);
  });

  it("SHOULD: checks `above` - greater than", function () {
    var one = 1;
    var five = 5;
    one.should.not.be.above(1);
    five.should.be.above(2);
  });

  it("checks `least`- greater than or equal", function () {
    expect(1).to.be.at.least(1);
    expect(5).to.be.at.least(2);
  });

  it("SHOULD: checks `least`- greater than or equal", function () {
    var one = 1;
    var five = 5;
    one.should.be.at.least(1);
    five.should.be.at.least(2);
  });

  it("checks `below` - less than", function () {
    expect(1).to.not.be.below(1);
    expect(1).to.be.below(2);
  });

  it("SHOULD: checks `below` - less than", function () {
    var one = 1;
    one.should.not.be.below(1);
    one.should.be.below(2);
  });

  it("checks `most` - less than or equal", function () {
    expect(1).to.be.at.most(1);
    expect(1).to.be.at.most(2);
  });

  it("SHOULD: checks `most` - less than or equal", function () {
    var one = 1;
    one.should.be.at.most(1);
    one.should.be.at.most(2);
  });

  it("checks `within` - range", function () {
    expect(1).to.be.within(0, 2);
  });

  it("SHOULD: checks `within` - range", function () {
    var one = 1;
    one.should.be.within(0, 2);
  });

  it("checks `closeTo` - near", function () {
    expect(1.2).to.be.closeTo(1, 0.2);
    expect(1.2).to.not.be.closeTo(1, 0.0);
  });

  it("SHOULD: checks `closeTo` - near", function () {
    var foo = 1.2;
    foo.should.be.closeTo(1, 0.2);
    foo.should.not.be.closeTo(1, 0.0);
  });

  it("checks `match` - regular expression", function () {
    expect("foo").to.match(/^f[o]+/);
  });

  it("SHOULD: checks `match` - regular expression", function () {
    "foo".should.match(/^f[o]+/);
  });

  it("checks `string` - substring", function () {
    expect("foo bar").to.have.string("foo");
  });

  it("SHOULD: checks `string` - substring", function () {
    "foo bar".should.have.string("foo");
  });

  it("checks `satisfy` - functional check", function () {
    expect(42).to.satisfy(function (value) {
      return value === 6 * 7;
    });
  });

  it("SHOULD: checks `satisfy` - functional check", function () {
    var foo = 42;
    foo.should.satisfy(function (value) {
      return value === 6 * 7;
    });
  });
});
