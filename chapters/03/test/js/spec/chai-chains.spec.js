describe("Chai assertion chains", function () {

  // Runs once before all tests start.
  before(function(){
    this.foo = 'foo';
  });

  // Runs once when all tests finish.
  after(function(){
    this.foo = null;
  });

  // A contrived example using all of the available Chai
  // language chains:
  // * `to`
  // * `be`
  // * `been`
  // * `is`
  // * `that`
  // * `and`
  // * `have`
  // * `with`
  // * `at`
  // * `of`
  it("can chain assertions", function () {
    expect(this.foo).a("string");
    expect(this.foo).to.be.a("string");
    expect(this.foo).to.have.been.a("string");
    expect(this.foo).that.is.a("string");

    // Chains can be repeated.
    expect(this.foo).to.to.to.to.a("string");

    // OK, so we needed to use up all the rest here. ;)
    expect(this.foo).and.with.at.of.a("string");
  });

  it("can chain assertions using 'should'", function () {
    // var foo = this.foo;
    this.foo.should.be.a("string");
    this.foo.should.have.been.a("string");
  });

  // `.not` can negate any assertion.
  it("can negate chains", function () {
    expect(this.foo).to.not.equal("bar");

    // Let's get literary.
    expect("Hamlet").to.be.not.to.be.an("object");
  });

  // `.not` can negate any assertion.
  it("can negate chains using 'should'", function () {
    this.foo.should.not.be.equal("bar");

    // Let's get literary.
    this.foo.should.not.be.an("object");
  });

  // `.deep` turns on deep equality checking.
  it("can deeply check chains", function () {
    // Without deep checking.
    expect({foo: "bar"}).to.not.equal({foo: "bar"});

    // With deep checking.
    expect({foo: "bar"}).to.deep.equal({foo: "bar"});
    expect({foo: {bar: "baz"}})
      .to.have.deep.property("foo.bar", "baz");
  });

  // `.deep` turns on deep equality checking.
  it("can deeply check chains using 'should'", function () {
    var foo = {foo: "bar"};
    var foo2 = {foo: {bar: "baz"}};
    // Without deep checking.
    foo.should.not.be.equal({foo: "bar"});

    // With deep checking.
    foo.should.have.deep.equal({foo: "bar"});
    foo2.should.have.deep.property("foo.bar", "baz");
  });

  // Most Chai assertions are chainable
  it("can chain other assertions", function () {
    expect(this.foo)
      .to.be.a("string").and
      .to.equal("foo").and
      .to.have.length(3).and
      .to.match(/f[o]{2}/);
  });

  // Most Chai assertions are chainable
  it("can chain other assertions using 'should'", function () {
    this.foo.should
      .be.a('string').and
      .be.equal("foo").and
      .have.length(3).and
      .match(/f[o]{2}/);
  });
});
