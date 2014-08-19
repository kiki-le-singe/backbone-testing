describe("Namespace", function () {
  it("provides the 'App' object", function () {
    // Expect exists and is an object.
    expect(App).to.be.an("object");

    // Expect all namespace properties are present.
    expect(App).to.include.keys(
      "Config", "Collections", "Models",
      "Routers", "Templates", "Views"
    );
  });
  it("provides the 'App' object using 'should'", function () {
    // Expect exists and is an object.
    App.should.be.an('object');

    // Expect all namespace properties are present.
    App.should.include.keys(
      "Config", "Collections", "Models",
      "Routers", "Templates", "Views"
    );
  });

  it("provides the 'app' object", function () {
    expect(app).to.be.an("object");
  });

  it("provides the 'app' object using 'should'", function () {
    app.should.to.be.an("object");
  });
});
