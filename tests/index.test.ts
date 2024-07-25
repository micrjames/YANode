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
   describe("Should store the given information", () => {
	  test.todo("");
	  test.todo("");
	  test.todo("");
	  test.todo("");
   });
});
