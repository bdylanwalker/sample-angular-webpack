export default ngModule => {
  describe(`saw-hello`, () => {
    beforeEach(window.module(ngModule.name));

    it(`should test properly`, () => {
      expect(true).to.be.true;
    });
  });
};
