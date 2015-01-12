describe("calculator", function() {
    it("should return 0 if input is empty string", function() {
        expect(Calculator.add("")).toEqual(0);
    });

    it("should return number if input is number", function() {
        expect(Calculator.add("50")).toEqual(50);
    });

    it("should return the sum of 2 numbers if input is 2 numbers separated by comma", function() {
        expect(Calculator.add("4,5")).toEqual(9);
    });

});
