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
	  test("Should have a correctly typed key.", () => {
		  expect(typeof node1.Key).toBe("number");
	  });
	  test("Should point next to a node.", () => {
		  expect(node1.next).not.toBeNull();
	  });
	  test("Should hold the value in its key.", () => {
		  expect(node1.Key).toBe(1);
	  });
	  test("Should point to the next node.", () => {
		  expect(node1.next).toEqual(node2);
	  });
   });
});
