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
		node1 = {
		   Key: 1
		};
		node2 = {
		   Key: 2,
		   _parent: node1
		};
		node3 = {
		   Key: 3,
		   _parent: node1
		};
		node1._children = [node2, node3];
	  });
	  test("Should have a correctly typed key.", () => {
		  const node1KeyType = typeof node1.Key;
		  expect(node1KeyType).toBe("number");
	  });
	  test("Should be a parent node.", () => {
		  const node1Children = node1._children; 
		  const isParent = node1Children.every(child => child._parent === node1);
		  expect(isParent).toBeTruthy();
	  });
	  test("Should point to at least one child.", () => {
		  const node1Children = node1._children; 
		  const numOfNode1Children = node1Children.length;
		  expect(numOfNode1Children).toBeGreaterThan(1);
	  });
	  test("Should hold the value in its key.", () => {
		  const node1Key = node1.Key;
		  expect(node1Key).toBe(1);
	  });
	  test("Should point to the children.", () => {
		  const node1Children = node1._children; 
		  expect(node1Children).toEqual([node2, node3]);
	  });
   });
});
