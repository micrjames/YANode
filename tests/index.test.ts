import { YANode } from "../YANode";

describe("A node", () => {
   describe("As the start of a list", () => {
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
   describe("As a parent node", () => {
	  let node1: YANode<number>;
	  let node2: YANode<number>;
	  let node3: YANode<number>;
	  beforeAll(() => {
		node2 = {
		   Key: 2,
		   parent: node1
		};
		node3 = {
		   Key: 3,
		   parent: node1
		};
		node1 = {
		   Key: 1,
		   children: [node2, node3]
		};
	  });
	  test.todo("Should have a correctly typed key.");
	  test.todo("Should be the parent node of the child nodes.");
	  test.todo("Should point to at least one child.");
	  test.todo("Should hold the value in its key.");
	  test.todo("Should point to the children.");
   });
});
