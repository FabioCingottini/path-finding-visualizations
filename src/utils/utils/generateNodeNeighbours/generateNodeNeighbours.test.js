const { generateNodeNeighbours } = require("./generateNodeNeighbours");

describe("Test generateNodeNeighbours", function () {
  // !! Wide stuff
  // given the following 'wide' lattice graph
  //  1   2   3   4   5   6   7   8
  //  9   a   b   c   d   e   f  10
  // 11  12  13  14  15  16  17  18
  const arrStr_wideGraphNodeNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
  ];
  // top stuff
  it("should generate proper neighbours for a node in the top-left corner of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      1
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "9"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "a"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-center of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      4
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "3");
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "5"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "c"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "b"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "d"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-right corner of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      8
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "7");
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "10"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "f"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // center stuff
  it("should generate proper neighbours for a node in the center-left of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      9
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "1");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "a"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "11"
    );
    const arr_bottomRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "12"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the center of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      12
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "3"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "4");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "5"
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "b");
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "d"
    );
    const arr_bottomLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "13"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "14"
    );
    const arr_bottomRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "15"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(8);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the center-right of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      16
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "8");
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "f");
    const arr_bottomLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "17"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "18"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // bottom stuff
  it("should generate proper neighbours for a node in the bottom-left corner of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      17
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "9");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "a"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "12"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-center corner of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      20
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "b"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "c");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "d"
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "13"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "15"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-right corner of a wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wideGraphNodeNames,
      8,
      24
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "f"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "10");
    const arr_leftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "17"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
  });

  // !! Tall graph stuff
  // given the following 'tall' lattice graph
  //  1   2   3
  //  4   5   6
  //  7   8   9
  //  a   b  ~c
  //  d   e   f
  // 10  11  12
  // 13  14  15
  // 16  17  18
  const arrStr_tallGraphNodeNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
  ];
  // top stuff
  it("should generate proper neighbours for a node in the top-left corner of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      1
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "5"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-center of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      2
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "1");
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "3"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "5"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "6"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-right corner of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      3
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "2");
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "6"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "5"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // center stuff
  it("should generate proper neighbours for a node in the center-left of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      10
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "7");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "8"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "b"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "d"
    );
    const arr_bottomRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "e"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the center of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      11
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "8");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "9"
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "a");
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "c"
    );
    const arr_bottomLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "d"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "e"
    );
    const arr_bottomRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "f"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(8);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the center-right of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      12
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "8"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "9");
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "b");
    const arr_bottomLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "e"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "f"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // bottom stuff
  it("should generate proper neighbours for a node in the bottom-left corner of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      22
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "13");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "14"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "17"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-center corner of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      23
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "13"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "14");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "15"
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "16"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "18"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-right corner of a tall graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tallGraphNodeNames,
      3,
      24
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "14"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "15");
    const arr_leftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "17"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
  });

  // !! Square graph stuff
  // given the following 'square' lattice graph
  //  1   2   3   4   5
  //  6   7   8   9   a
  //  b   c   d   e   f
  // 10  11  12  13  14
  // 15  16  17  18  19
  const arrStr_squareGraphNodeNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];
  // top stuff
  it("should generate proper neighbours for a node in the top-left corner of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      1
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "6"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-center of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      3
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "2");
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "8"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "9"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-right corner of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      5
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "4");
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "a"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "9"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // center stuff
  it("should generate proper neighbours for a node in the center-left of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      11
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "6");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "c"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "10"
    );
    const arr_bottomRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "11"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the center of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      13
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "8");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "9"
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "c");
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "e"
    );
    const arr_bottomLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "11"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "12"
    );
    const arr_bottomRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "13"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(8);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the center-right of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      15
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "9"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "a");
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "e");
    const arr_bottomLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "13"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "14"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // bottom stuff
  it("should generate proper neighbours for a node in the bottom-left corner of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      21
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "10");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "11"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "16"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-center corner of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      23
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "11"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "12");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "13"
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "16"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "18"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-right corner of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      5,
      25
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "13"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "14");
    const arr_leftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "18"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
  });

  // --> 2s STUFFS <--

  // !! Wide 2s stuff
  // given the following 'wide' 2s lattice graph
  //  1   2   3   4
  //  5   6   7   8
  const arrStr_wide2SGraphNodeNames = ["1", "2", "3", "4", "5", "6", "7", "8"];
  // top stuff
  it("should generate proper neighbours for a node in the top-left corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wide2SGraphNodeNames,
      4,
      1
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "5"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "6"
    );
    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-center of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wide2SGraphNodeNames,
      4,
      3
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "2");
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "6"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "8"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-right corner of 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wide2SGraphNodeNames,
      4,
      4
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "3");
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "8"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // bottom stuff
  it("should generate proper neighbours for a node in the bottom-left corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wide2SGraphNodeNames,
      4,
      5
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "1");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "6"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-center corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wide2SGraphNodeNames,
      4,
      7
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "3");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "6");
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "8"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-right corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_wide2SGraphNodeNames,
      4,
      8
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "3"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "4");
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "7");

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
  });

  // !! Tall 2s stuff
  // given the following 'tall' 2s lattice graph
  //  1   2
  //  3   4
  //  5   6
  //  7   8
  const arrStr_tall2SGraphNodeNames = ["1", "2", "3", "4", "5", "6", "7", "8"];
  // top stuff
  it("should generate proper neighbours for a node in the top-left corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tall2SGraphNodeNames,
      2,
      1
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "3"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-right corner of 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tall2SGraphNodeNames,
      2,
      2
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "1");
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "3"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // center stuff
  it("should generate proper neighbours for a node in the center-left of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      2,
      3
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "1");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "5"
    );
    const arr_bottomRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "6"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the center-right of a square graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_squareGraphNodeNames,
      2,
      6
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "3"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "4");
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "5");
    const arr_bottomLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "7"
    );
    const arr_bottomNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "8"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(5);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_bottomNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
    expect(arr_bottomLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // bottom stuff
  it("should generate proper neighbours for a node in the bottom-left corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tall2SGraphNodeNames,
      2,
      7
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "5");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "6"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "8"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-right corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_tall2SGraphNodeNames,
      2,
      8
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "5"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "6");
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "7");

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
  });

  // !! Square 2s stuff
  // given the following 'square' 2s lattice graph
  //  1   2
  //  3   4
  const arrStr_square2SGraphNodeNames = ["1", "2", "3", "4"];
  // top stuff
  it("should generate proper neighbours for a node in the top-left corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_square2SGraphNodeNames,
      2,
      1
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "3"
    );
    const arr_belowRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the top-right corner of 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_square2SGraphNodeNames,
      2,
      2
    );
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "1");
    const arr_belowNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );
    const arr_belowLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "3"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_belowNeighbour[1]).toEqual(1);
    expect(arr_belowLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
  // bottom stuff
  it("should generate proper neighbours for a node in the bottom-left corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_square2SGraphNodeNames,
      2,
      3
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "1");
    const arr_topRightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "2"
    );
    const arr_rightNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "4"
    );

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_rightNeighbour[1]).toEqual(1);
    expect(arr_topRightNeighbour[1]).toEqual(Math.SQRT2);
  });
  it("should generate proper neighbours for a node in the bottom-right corner of a 2s wide graph", function () {
    // act
    const arr_nodeNeighbours = generateNodeNeighbours(
      arrStr_square2SGraphNodeNames,
      2,
      4
    );
    const arr_topLeftNeighbour = arr_nodeNeighbours.find(
      ([name]) => name === "1"
    );
    const arr_topNeighbour = arr_nodeNeighbours.find(([name]) => name === "2");
    const arr_leftNeighbour = arr_nodeNeighbours.find(([name]) => name === "3");

    // assert
    expect(arr_nodeNeighbours).toHaveLength(3);
    expect(arr_leftNeighbour[1]).toEqual(1);
    expect(arr_topNeighbour[1]).toEqual(1);
    expect(arr_topLeftNeighbour[1]).toEqual(Math.SQRT2);
  });
});
