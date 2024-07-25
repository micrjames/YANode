import { YANode } from "../YANode";

describe("A node", () => {
      let node1: YANode<number>;
      let node2: YANode<number>;
   beforeAll(() => {
	  node2 = {
		 Key: 2,
		 next: null
	  };
	  node1 = {
		 Key: 1,
		 next: node2
	  };
   });
   describe("Given information", () => {
	  test.todo("Should have a correctly typed key.");
	  test.todo("Should point next to a node.");
	  test.todo("Should hold the value in its key.");
	  test.todo("Should point to the next node.");
   });
});
