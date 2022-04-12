const { generateNodesNames } = require("./generateNodesNames");

describe("Test generateNodesNames", function () {
  it("Should generate a proper amount of names", function () {
    // arrange
    const int_totalAmountOfNodes = 15;
    const int_expectedResultLength = int_totalAmountOfNodes;

    // act
    const arrStr_result = generateNodesNames(int_totalAmountOfNodes);

    // assert
    expect(arrStr_result).toHaveLength(int_expectedResultLength);
  });

  it("Should return an array where every item is an hex string number in position i + 1", function () {
    // act
    const arrStr_result = generateNodesNames(15);

    // assert
    for (let i = 0; i < arrStr_result; i++) {
      const nodeName = arrStr_result[i];
      expect(parseInt(nodeName, 16)).toEqual(i + 1);
    }
  });
});
