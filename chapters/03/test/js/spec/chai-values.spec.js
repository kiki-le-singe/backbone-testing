describe("Chai value properties", function () {
  // Value is truthy.
  it("checks `ok`", function () {
    expect("foo").to.be.ok;
    expect(true).to.be.ok;
    expect(false).to.not.be.ok;
  });

  // Value is truthy.
  it("checks `ok` using 'should'", function () {
    "foo".should.be.ok;
    true.should.be.ok;
    false.should.not.be.ok;
  });

  // Value is not `null` or `undefined`.
  it("checks `exist`", function () {
    expect("").to.exist;
    expect(false).to.exist;
    expect(null).to.not.exist;
    expect(undefined).to.not.exist;
  });

  // Value is not `null` or `undefined`.
  it("checks `exist` using 'should'", function () {
    "".should.exist;
    false.should.exist;
    // null and undefined tests doens't work with 'should'
  });

  it("checks `true`", function () {
    expect("foo").to.not.be.true;
    expect(true).to.be.true;
    expect(false).to.not.be.true;
  });

  it("checks `true` using 'should'", function () {
    "foo".should.not.be.true;
    true.should.be.true;
    false.should.not.be.true;
  });

  it("checks `false`", function () {
    expect("").to.not.be.false;
    expect(true).to.not.be.false;
    expect(false).to.be.false;
  });

  it("checks `false` using 'should'", function () {
    "".should.not.be.false;
    true.should.not.be.false;
    false.should.be.false;
  });

  it("checks `null`", function () {
    expect(undefined).to.not.be.null;
    expect(false).to.not.be.null;
    expect(null).to.be.null;
  });

  it("checks `null` using 'should'", function () {
    false.should.not.be.null;
    // null and undefined tests doens't work with 'should'
  });

  it("checks `undefined`", function () {
    expect(undefined).to.be.undefined;
    expect(false).to.not.be.undefined;
    expect(null).to.not.be.undefined;
  });

  it("checks `undefined` using 'should'", function () {
    false.should.not.be.undefined;
    // null and undefined tests doens't work with 'should'
  });

  it("checks `arguments`", function () {
    expect(arguments).to.be.arguments;
    expect([]).to.not.be.arguments;
  });

  it("checks `arguments` using 'should'", function () {
    arguments.should.be.arguments;
    [].should.not.be.arguments;
  });
});
