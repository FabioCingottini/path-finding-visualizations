const {
  createDenseLatticeGraphAdjacencyList,
} = require("./createDenseLatticeGraphAdjacencyList");

describe("Test createDenseLatticeGraphAdjacencyList", () => {
  // !!! IMPORTANT
  // these tests are not going to test the content of the adjacency list
  // of one or more nodes, because this is managed by an util function
  // already properly tested

  it("Should return a proper amount of nodes for a 10x10 graph", () => {
    // arrange
    const int_width = 10;
    const int_height = 10;
    const int_expectedNumberOfNodes = int_width * int_height;

    // act
    const obj_graph = createDenseLatticeGraphAdjacencyList(
      int_width,
      int_height
    );
    const int_numberOfNodes = Object.keys(obj_graph).length;

    // assert
    expect(int_numberOfNodes).toEqual(int_expectedNumberOfNodes);
  });
  it("Should return a proper amount of nodes for a 10x2 graph", () => {
    // arrange
    const int_width = 10;
    const int_height = 2;
    const int_expectedNumberOfNodes = int_width * int_height;

    // act
    const obj_graph = createDenseLatticeGraphAdjacencyList(
      int_width,
      int_height
    );
    const int_numberOfNodes = Object.keys(obj_graph).length;

    // assert
    expect(int_numberOfNodes).toEqual(int_expectedNumberOfNodes);
  });
  it("Should return a proper amount of nodes for a 10x20 graph", () => {
    // arrange
    const int_width = 10;
    const int_height = 20;
    const int_expectedNumberOfNodes = int_width * int_height;

    // act
    const obj_graph = createDenseLatticeGraphAdjacencyList(
      int_width,
      int_height
    );
    const int_numberOfNodes = Object.keys(obj_graph).length;

    // assert
    expect(int_numberOfNodes).toEqual(int_expectedNumberOfNodes);
  });
  it("Should return a proper amount of nodes for a 20x10 graph", () => {
    // arrange
    const int_width = 20;
    const int_height = 10;
    const int_expectedNumberOfNodes = int_width * int_height;

    // act
    const obj_graph = createDenseLatticeGraphAdjacencyList(
      int_width,
      int_height
    );
    const int_numberOfNodes = Object.keys(obj_graph).length;

    // assert
    expect(int_numberOfNodes).toEqual(int_expectedNumberOfNodes);
  });
  it("Should return a proper amount of nodes for a 20x3 graph", () => {
    // arrange
    const int_width = 20;
    const int_height = 3;
    const int_expectedNumberOfNodes = int_width * int_height;

    // act
    const obj_graph = createDenseLatticeGraphAdjacencyList(
      int_width,
      int_height
    );
    const int_numberOfNodes = Object.keys(obj_graph).length;

    // assert
    expect(int_numberOfNodes).toEqual(int_expectedNumberOfNodes);
  });
  it("Should return a proper amount of nodes for a 20x7 graph", () => {
    // arrange
    const int_width = 20;
    const int_height = 7;
    const int_expectedNumberOfNodes = int_width * int_height;

    // act
    const obj_graph = createDenseLatticeGraphAdjacencyList(
      int_width,
      int_height
    );
    const int_numberOfNodes = Object.keys(obj_graph).length;

    // assert
    expect(int_numberOfNodes).toEqual(int_expectedNumberOfNodes);
  });
});
