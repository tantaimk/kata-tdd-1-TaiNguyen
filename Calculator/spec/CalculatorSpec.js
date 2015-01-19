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

    it("should return the sum of 5 numbers if input is 5 numbers separated by comma", function() {
        expect(Calculator.add("4,5,6,7,8")).toEqual(30);
    });

    it("should return the sum of 4 numbers if input is 4 numbers separated by comma and new line", function() {
        expect(Calculator.add("1\n2,3\n4")).toEqual(10);
    });

    it("should return the sum of 4 numbers if input is 4 numbers separated by a custom delimiter", function() {
        expect(Calculator.add("//;\n1;3;5;7")).toEqual(16);
    });

    it("should alert 'negatives not allowed' with 1 negative number that was passed", function() {
        expect(Calculator.add("-1")).toEqual(null);
    });

    it("should alert 'negatives not allowed' with multiple negatives that were passed", function() {
        expect(Calculator.add("-1,2,-5,8")).toEqual(null);
    });

    it("should ignore a number bigger than 1000", function() {
        expect(Calculator.add("1\n1001,3\n4")).toEqual(8);
    });

    it("should ignore numbers bigger than 1000", function() {
        expect(Calculator.add("1001\n2,2000\n4\n5,1005")).toEqual(11);
    });

    it("should allow delimiters to be of any length", function() {
        expect(Calculator.add("//[***]\n1***2***3")).toEqual(6);
    });

    it("should allow multiple delimiters like this: “//[delim1][delim2]\n”", function() {
        expect(Calculator.add("//[*][%]\n1*2%3")).toEqual(6);
    });
});
