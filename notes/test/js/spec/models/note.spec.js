describe("App.Models.Note", function () {
  it("has default values", function () {
    // Create empty note model.
    var model = new App.Models.Note();

    expect(model).to.be.ok;
    expect(model.get("title")).to.equal("");
    expect(model.get("text")).to.equal("*Edit your note!*");
    expect(model.get("createdAt")).to.be.a("Date");
  });

  it("has default values using 'should'", function () {
    // Create empty note model.
    var model = new App.Models.Note();

    model.should.to.be.ok;
    model.get("title").should.to.equal("");
    model.get("text").should.to.equal("*Edit your note!*");
    model.get("createdAt").should.to.be.a("Date");
  });

  it("sets passed attributes", function () {
    var model = new App.Models.Note({
      title: "Grocery List",
      text: "* Milk\n* Eggs\n*Coffee"
    });

    expect(model.get("title")).to.equal("Grocery List");
    expect(model.get("text")).to.equal("* Milk\n* Eggs\n*Coffee");
  });

  it("sets passed attributes using 'should'", function () {
    var model = new App.Models.Note({
      title: "Grocery List",
      text: "* Milk\n* Eggs\n*Coffee"
    });

    model.get("title").should.to.equal("Grocery List");
    model.get("text").should.to.equal("* Milk\n* Eggs\n*Coffee");
  });
});
