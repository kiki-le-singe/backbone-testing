describe("Chai objects, arrays", function () {

  var Foo = function () {},
    Bar = function () {};

  before(function () {
    this.foo = new Foo();
    this.bar = new Bar();
  });

  after(function () {
    this.foo = null;
    this.bar = null;
  });

  it("checks `a` - value type", function () {
    expect("foo").is.a("string");
    expect("foo").is.not.a("number");
    expect({foo: "bar"}).is.an("object");
  });

  it("SHOULD: checks `a` - value type", function () {
    var foo = {foo: "bar"};
    "foo".should.be.a("string");
    "foo".should.not.be.a("number");
    foo.should.be.an("object");
  });

  it("checks `instanceof` - constructor type", function () {
    var Foo = function () {},
      Bar = function () {};

    expect(new Foo()).is.an.instanceof(Foo);
    expect(new Bar()).is.not.an.instanceof(Foo);
  });

  it("SHOULD: checks `instanceof` - constructor type", function () {
    this.foo.should.be.an.instanceof(Foo);
    this.bar.should.not.be.an.instanceof(Foo);
  });

  it("checks `property` - object property", function () {
    expect({foo: "bar"}).to.have.property("foo", "bar");

    // Deep checking - object, and array.
    expect({foo: {bar: "baz"}})
      .to.have.deep.property("foo.bar", "baz");
    expect({foo: ["bar", "baz"]})
      .to.have.deep.property("foo[1]", "baz");
  });

  it("SHOULD: checks `property` - object property", function () {
    var foo = {foo: "bar"};
    var foo2 = {foo: {bar: "baz"}};
    var foo3 = {foo: ["bar", "baz"]};

    foo.should.have.property("foo", "bar");

    // Deep checking - object, and array.
    foo2.should.have.deep.property("foo.bar", "baz");
    foo3.should.have.deep.property("foo[1]", "baz");
  });

  it("checks `ownProperty` - object's own property", function () {
    expect({foo: "bar"}).to.have.ownProperty("foo");
  });

  it("SHOULD: checks `ownProperty` - object's own property", function () {
    var foo = {foo: "bar"};
    foo.should.have.ownProperty("foo");
  });

  it("checks `contain` - object or array presence", function () {
    expect(["bar", "baz"]).to.have.contain("bar");
    expect("foo").to.have.contain("f");
  });

  it("SHOULD: checks `contain` - object or array presence", function () {
    ["bar", "baz"].should.contain("bar");
    "foo".should.contain("f");
  });

  it("checks `length` - object or array length", function () {
    expect(["bar", "baz"]).to.have.length(2);
    expect("foo").to.have.length(3);
  });

  it("SHOULD: checks `length` - object or array length", function () {
    ["bar", "baz"].should.have.length(2);
    "foo".should.have.length(3);
  });

  it("checks `keys` - object keys", function () {
    // Exact matching of all keys.
    expect({foo: 1, bar: 2}).to.have.keys(["foo", "bar"]);

    // Exclusion of any keys.
    expect({foo: 1, bar: 2}).to.not.have.keys(["baz"]);

    // Inclusion of some keys.
    expect({foo: 1, bar: 2}).to.include.keys(["foo"]);
    expect({foo: 1, bar: 2}).to.contain.keys(["bar"]);
  });

  it("SHOULD: checks `keys` - object keys", function () {
    var foo = {foo: 1, bar: 2};
    // Exact matching of all keys.
    foo.should.have.keys(["foo", "bar"]);

    // Exclusion of any keys.
    foo.should.not.have.keys(["baz"]);

    // Inclusion of some keys.
    foo.should.include.keys(["foo"]);
    foo.should.contain.keys(["bar"]);
  });
});
