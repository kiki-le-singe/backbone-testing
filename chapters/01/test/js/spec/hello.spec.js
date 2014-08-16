/*global hello */

// A simple function to test.
window.hello = function () {
  return "Hello World";
};

describe("Trying out the test libraries", function () {
  describe("Chai", function () {
    it("should be equal using 'expect'", function () {
      expect(hello()).to.equal("Hello World");
    });
    it("should be equal using 'should'", function () {
      hello().should.equal('Hello World');
    });
  });

  describe("Sinon.JS", function () {
    it("should report spy called using 'expect'", function () {
      var helloSpy = sinon.spy(window, 'hello');

      expect(helloSpy.called).to.be.false;
      hello();
      expect(helloSpy.called).to.be.true;
      hello.restore();
    });
    it("should report spy called using 'should'", function () {
      var helloSpy = sinon.spy(window, 'hello');

      helloSpy.called.should.to.be.false;
      hello();
      helloSpy.called.should.to.be.true;
      hello.restore();
    });
  });
});
